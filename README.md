## Mystique


Due to the dynamic, almost shape-shifting, nature of [FatFractal's](http://www.fatfractal.com/) NoServer module and FFDL configuraiton importing existing data structures becomes *almost* a no brainer. There is no need to pre-define your schemea if you don't want, just set the [FFDL](http://fatfractal.com/prod/docs/reference/#ffdl) to **learn mode** and off you go. The project includes two sample files `products.json` and `customers.json`. This exercise demostrates that by leveraging the flexibility of the FatFractal's NoServer migrating existing data, while never trivial, is made a lot easier with FatFractal.

If you aren't familiar with the FatFractal platform then visit their [getting started page](http://fatfractal.com/prod/docs/getting-started/). Please **note**...this project doesn't require an account with FatFractal. You can run it locally, but will need their [runtime](http://system.fatfractal.com/console/ff/ext/Releases/Latest/FF_RUNTIME).

### Usage

*Scripts found in the Importer directory*

`node import.js products.json`

`node import.js customers.json`

### Verifying Data

You can verify your data by browsing to [http://localhost:8080/mystique/databrowser/databrowser.html](http://localhost:8080/mystique/databrowser/databrowser.html)

[http://localhost:8080/mystique/ff/resources/Products](http://localhost:8080/mystique/ff/resources/Products) and [http://localhost:8080/mystique/ff/resources/Customers](http://localhost:8080/mystique/ff/resources/Customers)

### Name Genesis

> A fascinating aura of mystery, awe, and power surrounding someone or something.

> Mystique can psionically shift the atoms of her body to duplicate any humanoid of either sex, wearing any kind of clothing. She can precisely duplicate another person’s retina pattern, finger, palm and skin-pore patterns, and vocal cords. She can increase her volume, but not her mass. Mystique’s power grants her age retardation, increased healing, and immunity to drugs and poisons.

Source: [http://marvel.com/universe/Mystique#ixzz2mM62OPGF](http://marvel.com/universe/Mystique#ixzz2mM62OPGF)