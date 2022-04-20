class Bestiole
{
    constructor(y,x)
    {
        this.y = y;
        this.x = x;
        this.vivant = true;
        this.arround = 0;

        this.directions =
        [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    MAJ()
    {
        this.directions =
        [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    triB()
    {

        this.MAJ();

        for (var i in this.directions)
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x >= 0 && y >= 0 && x < taille && y < taille)
            {
                if(matrice[y][x] == 1)
                {
                    this.arround ++;
                    //console.log(this.arround + " B autour B");
                }
            }    
        }

        if(this.arround < 4 || this.arround > 2)
        {
            this.vivant = false;
        }
        else
        {
            this.vivant = true;
        }

        return this.vivant;
    }
}


class Sans
{
    constructor(y,x)
    {
        this.y = y;
        this.x = x;
        this.birth = false;
        this.arround = 0;
        //console.log("coord" + this.y + this.x)

        this.directions =
        [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    MAJ()
    {
        this.directions =
        [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    triV()
    {

        this.MAJ();

        for (var i in this.directions)
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if(x >= 0 && y >= 0 && x < taille && y < taille)
            {
                if(matrice[y][x] == 1)
                {
                    this.arround ++;
                }
            }
        }
        console.log(this.arround + " B autour de V");
        if(this.arround >= 3)
        {
            this.birth = true;
        }
        else
        {
            this.birth = false;
        }

        return this.birth;

    }
}