from bs4 import BeautifulSoup
import requests
import pandas as pd
from PIL import Image
import urllib.request
import ssl


ssl._create_default_https_context = ssl._create_unverified_context



"""url = 'https://cryptorank.io/price/' + id
    re = requests.get(url).text
    soup = BeautifulSoup(re, "html.parser")
imagen = soup.find_all("img")[1]
logo_url = imagen['src']
print(logo_url)
url2 = logo_url
img = urllib.request.urlretrieve(url2,'img.png')
logo = Image.open("img.png")
logo.show()
"""



data = ['BTC','ETH','BNB','ADA','DOGE','XRP','DOT','BCH','SOL','LTC','LINK','ICP','MATIC','THETA','XLM','ETC','VET','FIL','TRON','EOS','XMR','MIOTA','CAKE','MKR','LUNA', 'WEX', 'CHZ']


url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=300&currency=USD'
re = requests.request("GET", url)
dict_all = re.json()
lista = list(dict_all.values())
all = lista[0]

lista_symbol = []
lista_icon = []
lista_price = []
lista_priceChange1h = []
lista_priceChange1d = []
lista_priceChange1w = []
lista_fav = []
lista_mktcap = []
lista_volume = []


x = 0
i = 0
for i in range(len(all)):
    info = all[i]
    id = info['id']
    icon = info['icon']
    img = urllib.request.urlretrieve(icon, 'img.png')
    logo = Image.open("img.png")
    #logo.show()

    #outline = Image.open("outline.png")
    #outline.show()

    name = info['name']
    symbol = info['symbol']

    price = info['price']
    #print(price)


    if (price >= 1000):
        price_str = int(price)
    if (price >= 100 and price < 1000):
        price = float(price)
        price_str = round(price,2)
    if (price >= 0.001 and price < 100):
        price = float(price)
        price_str = round(price, 3)
    if (price < 0.0001):
        price_str = str(price)
        price_str = price_str[0 : 8]
        price = float(price_str)




    #price = round(price,5)
    price_str = str(price)
    price_str = price_str[: 5]
    last = price_str[4:]
    if (last == '.'):
        price_str = price_str[: 4]


    priceChange1h = info['priceChange1h']
    priceChange1d = info['priceChange1d']
    priceChange1w = info['priceChange1w']

    mktcap = info['marketCap']
    mktcap_int = int(mktcap)
    volume = info['volume']
    volume_int = int(volume)

    lista_symbol.append(symbol)
    lista_icon.append(icon)
    lista_price.append(price_str)
    lista_priceChange1h.append(priceChange1h)
    lista_priceChange1d.append(priceChange1d)
    lista_priceChange1w.append(priceChange1w)
    lista_fav.append(i + 1)
    lista_mktcap.append(mktcap_int)
    lista_volume.append(volume_int)



#df = pd.DataFrame({'ICON':lista_icon, 'COIN':lista_symbol, 'PRICE':lista_price, '% 1h':lista_priceChange1h, '% 1d':lista_priceChange1d, '% 1w':lista_priceChange1w})
df = pd.DataFrame({'#':lista_fav , 'COIN':lista_symbol, 'PRICE':lista_price, '% 1h':lista_priceChange1h, '% 1d':lista_priceChange1d, '% 1w':lista_priceChange1w, 'mktCap':lista_mktcap, 'volume':lista_volume})

df.to_csv('btc.csv', index=False)

print(df)


"""
result = df.to_html('popup.html', index=False, border=0, justify='left')


pd.set_option('colheader_justify', 'center')

html_string = '''
<html>
  <head><title>ValorCriptoBot</title></head>
  <link rel="stylesheet" type="text/css" href="df_style.css"/>
  
  <body class="light">
    <div id="light-dark-mode">
        <div class="sun sun-logo">
        <img src="http://livecodestream.dev/post/a-better-approach-to-dark-mode-on-your-website/featured.jpg" width="37" height="20"/>            
        <i class="fas fa-sun"></i>
        </div>
        <div class="moon moon-logo">
            <i class="fas fa-moon"></i>
        </div>
        
    </div>

    <div class="tab">
    <br>
    </div>
    
    <div class="tabcontent" id="Coins" style="display: block;">
    {table}
    </div>
    
    <div class="tabcontent" id="Favorites" style="display: none;">
    <table border="0" class="dataframe mystyle2" id="tabla2">
    <thead>
    <tr style="text-align: center;" class="tr2">
    <th>COIN</th>
    <th>PRICE</th>
    <th>% 1h</th>
    <th>% 1d</th>
    <th>% 1w</th>
    </tr>
    </thead>
    <tbody id="copyBody">
    </tbody>
    </table>
    </div>
    <div class="bottom" font-size: 12pt;>Follow us on Twitter @ValorCriptoBot</div>
    <script src="background.js"></script>

  </body>
</html>
'''

with open('popup.html', 'w') as f:
    f.write(html_string.format(table=df.to_html(classes='mystyle', index=False, border=0)))





f = open('popup.html', 'r')
contents = f.read()
soup = BeautifulSoup(contents,"html.parser")

for row in soup.select("tbody tr"):
    tds = row.find_all("td")
    i = 4
    while i <= 6:
        if float(tds[i].text) >= 0:
            tds[i]["class"] = "positivo"
        if float(tds[i].text) < 0:
            tds[i]["class"] = "negativo"
        i += 1

#print(df)

f.close()

texto = str(soup)

#texto = texto.replace('<tr>\n<td>','<tr>\n<td><img src=')
texto = texto.replace('https','<img src="https')
#texto = texto.replace('estrella','"file:///Users/pablomiranda/Desktop/ValorCriptoBot2/outline.png" height=12 width=12 id="toggle" class=fav onclick="changeClass(this);toggleImage(this);copyElement(this.parentElement.parentElement,this);">')
texto = texto.replace('.png</td>','.png" height=15 width=15>')
texto = texto.replace('15>\n<td>','15>\t')
texto = texto.replace('<th>ICON</th>\n','')
texto = texto.replace('tr style="text-align: center;">\n<th>','tr style="text-align: center;" class="tr1">\n<th>')
#texto = texto.replace('<table border="0" class="dataframe mystyle">\n<thead>','<table border="0" class="dataframe mystyle" id="tabla1" onclick="toggleMode(this);" >\n<thead>')
#texto = texto.replace('<th>FAV</th>','<th style="display: none;">FAV</th>')


f = open("popup.html", "w")
f.write(texto)
f.close()
"""