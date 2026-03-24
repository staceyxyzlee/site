#!/bin/sh
cd "$(dirname "$0")"
uv run python -c "
import http.server, os

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) and not self.path.endswith('/'):
            if os.path.exists(path + '.html'):
                self.path += '.html'
        super().do_GET()

print('Serving at http://localhost:8000')
http.server.HTTPServer(('localhost', 8000), Handler).serve_forever()
"