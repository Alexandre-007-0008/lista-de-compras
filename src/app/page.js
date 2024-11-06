import Image from "next/image";

export default function Home() {
  return (
    <>
      <head>
        <title>Home</title>

          <style>
            main {
              background - color: white;
            width: 1069px;
            height: 1069px;
                }

            #container div {
              background - color: #31B831;
            display: grid;
            height: 100px;
            grid-template-columns: 450px 400px 400px;
            justify-items: left;
            flex-wrap: nowrap;
                }

            .container01 {
              display: grid;
            height: 100px;
            /* grid-template-columns: 450px 400px 400px; */
            justify-items: left;
                }


            .center div {
              display: grid;
            justify-content: center;
                }

            #menu ul {
              padding - top: 10px;
            list-style: none;
                }

          </style>
      </head>

      <body>
        <main>
          <div id="container">
            <div id="menu">
              <br>
                <h3>Eletronic's Place</h3>
                <ul>
                  <li>Carrinho</li>
                  <li>Login</li>
                </ul>
                <br>
                  <ul>
                    <li>Encontre aqui seu dispositivo eletrônico!</li>
                  </ul>
                </div>
            </div>
            <div id="center">
              <h7>Produto</h7>
              <ul>
                <li>a lot of products</li>
              </ul>
            </div>
        </main>
      </body>
    </>
  )
}