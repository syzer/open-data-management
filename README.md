#WAT
plaing with `dat`
`get-dat` ?

`data-editor`
is cool tool if you do not have excel

also it can handle bloobs/images/cats
![blob](https://raw.github.com/syzer/open-data-management/master/after-seralizarion.png)

```bash

dat init

#create cantons from more complex data type
node municipalities.js > cantons.json
dat import people.json --key=name -d people

npm install -g dat
npm install -g picture-tube


wget http://cat.url/cat.png


dat write cat.png --name=alice -d people

dat read alice -d people > exported.png
picture-tube exported.png


dat clone http://publicbits.org:6442 eukaryota
cd eukaryota/
dat export -d organisms --limit=1

dat export -d organisms -f csv > organisms.csv
npm install data-editor -g
data-editor organisms.csv 3001
cat organisms.csv | wc -l
   1343

```
