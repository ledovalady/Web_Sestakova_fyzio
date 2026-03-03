Text pro soubor instrukce.md 
(zadání pro AI agenta k tvorbě webu)

**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
Strukturovaný komentovaný HTML5 kód s validní sémantikou
Responzivní design (mobile-first přístup)
CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
Základní JavaScript pro interaktivitu (na jemné oživení stránek)
Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
Zajisti rychlé načítání a optimalizovaný výkon
Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
Strukturuj nadpisy H1-H6
Přidej meta title a description na každé stránce
Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
Urči kanonickou url
Obrázkům dej alt popisky
Propoj stránky vnitřními odkazy
Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
Čitelné fonty s českou diakritikou, minimální velikost 18px
Správné řádkování (line-height 1.5-1.8 pro odstavce)
Nikdy nezarovnávej text do bloku
Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
Šířku celého webu dej na 80% obrazovky
Jasné oddělení sekcí a obsahových celků
Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
Vyvážené použití bílého prostoru (white space)
Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
Dej si záležet na patičce webu
U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
Stručné a srozumitelné texty
Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
Vizuální prvky podporující obsah (ikony, obrázky, grafika)
Logické uspořádání informací (nejdůležitější nahoře)
Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
Jednotný styl tlačítek, karet a komponent
Stejný padding/margin napříč podobnými elementy
Stejné zaoblení prvků - 20px
Konzistentní ikonografie (používej font awesome, ne emotikony)
Stíny karet pouze velmi jemné
Jednotný projev značky (brand voice)
Konzistentní použití barev napříč celým webem
Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)


**Barevná paleta**
Primární barva pro CTA (call-to-action) tlačítka # 00C2A9
Pro všechny texty # 16102A
Brand barvy (HEX): 
   - primární: [#008089]
   - sekundární: [#1E4793]
   - tlačítka: [#00C2A9]
   - pozadí: [kombinuj #D9F5F1 a #FAFAFA]
   - text: [#16102A]

**Fonty**
Brandový font [Alan Sans]
Všechny nadpisy dej semi-bold

**Struktura**
Jednostránkový web

Položky menu:
S čím vám pomohu
Trápí vás
O mně
Absolvované kurzy
Mé metody
Ceník
Kontakty
*Do menu přidat i rychlý kontakt - telefon*
+420 604 566 604 
*Do hlavičky Vlevo nahoře nahraj logo ze složky /Obrazky*


**Další prvky na webu**
Vlož Google recenze
Google mapu do patičky
 

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 
Pro zbytek webu používej moderní trendy webdesignu. Jemné gradienty, mikro interakce na hover, jemné scroll animace. Prvky ať mají zaoblené rohy border-radius 20px.

**obrázky**
Na webu použij fotky a ikony (př. přílohy), které najdeš ve složce /Obrazky

**texty**

Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 

*Hlavní stránka*
*Hero sekce* 
*Headline:* Fyzioterapie, která vás vrátí do běžného života
*Subheadline:* Fyzioterapie a rehabilitace Liberec - Bc. Barbora Šestáková
*CTA:* Objednat si termín
*Použij obrázek Obrazky/hero_pater.png*

*V boxu s číslem vpravo na fotce dej tyto texty:*
20+
let zkušeností

*Tři USP ikony s texty pod hero sekcí si prosím domysli dle kontextu a obsahu webu, ať to dává smysl, a ikony použij ze složky /Obrazky*

*Sekce: S čím vám pomohu?*
S čím vám pomohu?
Sestavení individuálního programu dle kinesiologického rozboru:
vyšetření,
kompenzační cvičení,
korekce svalových dysfunkcí a funkčních poruch,
instruktáž cviků strečinkových, stabilizačních, mobilizačních a posilovacích,
relaxační cvičení,
masáže.

*Sekce: Trápí vás…*
Trápí vás…
problémy s pohybovým aparátem po operaci (např. po zlomeninách či totálních endoprotézách, plastikách vazů), předoperační přípravná rehabilitace,
degenerativní onemocnění (artrózy atp.),
vertebrogenní potíže, akutní a chronické blokády, bolesti krční, hrudní a bederní páteře, bolestivá kostrč, stavy po výhřezu plotének po operacích páteře,
vadné držení těla,
skoliózy,
syndrom karpálního tunelu, tenisový loket,
neurologická onemocnění, jako např. periferní parézy, stavy po CMP, roztroušená skleróza,
plochonoží,
poradenství s efektivním tréninkem při cvičení v posilovně,
respirační rehabilitace,
prevence a kompenzace svalových dysbalancí a bolestí způsobených jednostranným přetěžováním,
ergonomie pracoviště.
Obrátit se na mne samozřejmě můžete i pokud nemáte žádné potíže a chtěli byste jen některé cviky zkonzultovat. Stejně tak, pokud vám obvodní či odborný lékař doporučí rehabilitaci. A nebo vás třeba jen občas bolí záda, a vy jste se rozhodli, že s tím konečně chcete něco udělat.

*Sekce - Rychlý kontakt*
Domluvte si návštěvu
Pište na e-mail barbora.sestakova@gmail.com nebo volejte na 604 566 604.

*Sekce - O mně*
Kdo jsem já?
Jsem fyzioterapeutka s více než dvacetiletou praxí. Vystudovala jsem fyzioterapii na 2. lékařské fakultě Univerzity Karlovy v Praze a dříve také ergoterapii na 1. lékařské fakultě UK. Osvědčení k výkonu zdravotnického povolání bez odborného dohledu jsem získala v roce 2011.
Zkušenosti jsem získala ve Fakultní nemocnici Bulovka, v soukromém rehabilitačním zařízení v Praze a od roku 2012 působím v Centru léčebné rehabilitace v Liberci. Při práci kladu důraz na individuální přístup, hledání příčin obtíží a srozumitelné vysvětlení postupu léčby, aby klient věděl, co a proč děláme.

*Sekce - Kurzy*

Absolvované kurzy
Dýchání v kontextu centrované postury, 2007,
Komplexní terapie krční páteře, 2007,
Diagnostika a terapie funkčních poruch, 2008,
Dýchání jako prostředek terapie, 2008,
Komplexní terapie bederní páteře a pánevního pletence, 2009,
Fyzioterapie funkce v klinické práci, 2011,
Terapeutické využití kinesiotape (kinesiotaping), 2011,
Komplexní rehabilitace ruky, 2013,
Individuální dlahování v terapii ruky, 2013,
Metodika senzomotorické stimulace, 2014,
Diagnostika a kinesioterapie u idiopatické skoliózy u dětí i dospělých, 2014,
Viscerovertebrální vztahy, 2015,
Fyzioterapie hlubokého stabilizačního systému, 2015,
Fyzioterapie u dysfunkce pánevního dna a inkontinence, 2016,
Komplexní terapie trigger pointů a globální reciproční svalová inhibice (PhD. Petr Bitnar),2016,
Využití aktivní segmentální centrace u poúrazových a pooperačních stavů končetin, 2016,
Rehabilitační léčba některých druhů ženské sterility metodou Ludmily Mojžíškové, 2017 (Bc. Vlasta Bezvodová),
DNS  sport a fitness, část 1,(Rehabilitation Prague School), 2017,
DNS Fit Kid (DNS pro děti, Rehabilitation Prague School), 2019,
Jak na poruchy dýchání, plicní rehabilitace (PhD. Kateřina Neumannová), 2019,
Diagnostika a terapie poškození kolenního kloubu (Mudr R.Frei), 2019,
Diagnostika a fyzioterapie kolenního kloubu (Rehalab), 2021,
DNS běžecký speciál (Rehabilitation Prague School), 2022,
Pánev v globálním pohledu (odborný online kurz – Centrum komplexní péče ROSETA), 2024,
Pánev a SI kloub v józe (odborný online kurz – Centrum komplexní péče ROSETA), 2024,
DNS Pánevní dno (Rehabilitation Prague School), 2024,
Rotace: zdroj vitality, prevence zranění (odborný online kurz – Centrum komplexní péče ROSETA), 2024,
Poruchy trávicího aparátu a jejich rhb řešení (odborný online kurz – Centrum komplexní péče ROSETA), 2024.

*Sekce - Metody*
Jaké využívám metody a postupy?
techniky měkkých tkání, mobilizace periferních kloubů a páteře, postizometrická relaxace,
práce s hlubokým stabilizačním systémem (HSS),
senzometrická stimulace,
prvky z Kabatovy metody, Vojtovy reflexní lokomace, Brügger koncept,
léčebná tělesná výchova, cvičení na míčích, balanční cvičení,
metoda podle Mojžíšové (léčba funkční ženské sterility),
posílení svalstva pánevního dna (po gynekologických operacích a při inkontinenci),
relaxační masáže + nahřátí,
reflexní masáž zad,
reflexní masáž nohou,
manuální lymfodrenáž,
viscerální terapie (jícnový reflux ap.),
baňkování.

*Sekce - Ceník*
Kolik fyzioterapie stojí?
60 minut ….  900 Kč
30 minut ….  450 Kč
Nejsme smluvní zařízení žádné pojišťovny, a nejsme proto schopni přijímat žádanky na rehabilitaci. Služby poskytujeme za přímou platbu, buď hotově, či kartou, po dohodě případně též na fakturu (fond kulturních a sociálních potřeb, atp.).
*Patička na každé stránce – vynech kontaktní formulář*
Objednejte si fyzioterapii
telefon: 604 566 604
email: barbora.sestakova@gmail.com

Kde mě najdete?
Fyzioterapie – Bc. Barbora Šestáková
Kostelní 10/5
460 01 Liberec II
Ordinaci najdete v paláci Sponer v Kostelní ulici, hned vedle Kafé Kytka.
Váš vůz můžete zaparkovat na placeném parkovišti přímo na Sokolovském náměstí. Krátkodobě lze zdarma parkovat v nedalekém obchodním centru Plaza.

Bc. Barbora Šestáková
Sídlo: Sáňkařská 448, 460 08 Liberec
IČO: 69524262
