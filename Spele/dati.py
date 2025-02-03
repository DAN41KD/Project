import sqlite3

conn = sqlite3.connect('dati.db')
c = conn.cursor()
c.execute("""
INSERT INTO score (vards, klikski, laiks, datums)
VALUES (?, ?, ?, ?)
""", ('Dairis', 42, 57, '14-02-2023'))
conn.commit()
conn.close()