from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

HOST = "127.0.0.1"
PORT = 8000

print(f"OUR WORLD is running at http://{HOST}:{PORT}")
print("برای توقف، Ctrl+C را بزن.")

server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
server.serve_forever()
