require('dotenv').config();
const express    = require('express');
const nodemailer = require('nodemailer');
const cors       = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host:   'smtp.yandex.ru',
  port:   465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/send', async (req, res) => {
  const { name, phone, service, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, error: 'Имя и телефон обязательны' });
  }

  const html = `
    <h3>Новая заявка с сайта</h3>
    <p><b>Имя:</b> ${name}</p>
    <p><b>Телефон:</b> ${phone}</p>
    ${service  ? `<p><b>Услуга:</b> ${service}</p>`  : ''}
    ${message  ? `<p><b>Сообщение:</b> ${message}</p>` : ''}
  `;

  try {
    await transporter.sendMail({
      from:    `"Сайт Elena Home" <${process.env.SMTP_USER}>`,
      to:      process.env.RECIPIENT,
      subject: `Новая заявка от ${name}`,
      html,
    });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка отправки' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
