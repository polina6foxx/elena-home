import os
import urllib.request
import urllib.parse
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

TG_TOKEN  = os.getenv('TG_TOKEN')
TG_CHAT_ID = os.getenv('TG_CHAT_ID')


def send_telegram(text):
    url  = f'https://api.telegram.org/bot{TG_TOKEN}/sendMessage'
    data = urllib.parse.urlencode({
        'chat_id':    TG_CHAT_ID,
        'text':       text,
        'parse_mode': 'HTML',
    }).encode()
    req = urllib.request.Request(url, data=data)
    urllib.request.urlopen(req, timeout=10)


@app.route('/send', methods=['POST'])
def send():
    data    = request.get_json()
    name    = data.get('name', '').strip()
    phone   = data.get('phone', '').strip()
    service = data.get('service', '')
    message = data.get('message', '')

    if not name or not phone:
        return jsonify({'success': False, 'error': 'Имя и телефон обязательны'}), 400

    lines = ['<b>Новая заявка с сайта 🏠</b>', '']
    lines.append(f'👤 <b>Имя:</b> {name}')
    lines.append(f'📞 <b>Телефон:</b> {phone}')
    if service:
        lines.append(f'🛠 <b>Услуга:</b> {service}')
    if message:
        lines.append(f'💬 <b>Сообщение:</b> {message}')

    try:
        send_telegram('\n'.join(lines))
        return jsonify({'success': True})
    except Exception as e:
        print(f'Ошибка Telegram: {e}')
        return jsonify({'success': False, 'error': 'Ошибка отправки'}), 500


if __name__ == '__main__':
    port = int(os.getenv('PORT', 3000))
    app.run(host='0.0.0.0', port=port)
