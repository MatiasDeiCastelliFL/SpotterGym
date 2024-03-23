import * as nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_NAME,
    pass: process.env.NODE_MAILER_PASS,
  },
});

transporter
  .verify()
  .then(() => {
    console.log('Ready for send emails');
  })
  .catch((err) => {
    console.warn('Error sending emails', err);
  });

export const send = async (id: string, email: string) => {
  await transporter.sendMail({
    from: 'spooter84@gmail.com',
    to: email,
    subject: 'Spooter',
    html: `<head>
      <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
  
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        font-family: Poppins;
        display: flex;
        justify-content: center;
        background-color: black;
        width: 100%;
        height: 30vh;
      }
  
      .wrapper {
        max-width: 535px;
        width: 90%;
        margin: 4rem auto;
      }
  
      .title {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: white;
      }
  
      .text {
        margin-top: 1rem;
        font-size: 16px;
        font-weight: 500;
        color: white;
        text-align: center;
      }
  
      .button_wrapper {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        border: #25d366;
      }
  
      .button {
        all: unset;
        width: 90%;
        max-width: 350px;
        text-align: center;
        padding: 17px 0;
        color: #fff;
        background: #25d366;
        margin: 0 auto;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        transition: 0.4s;
        &:hover {
          background-color: #219c4e;
        }
      }
    </style>
        </head>
        <div class="container">
          <div class="wrapper">
            <h1 class="title">Excelente, ahora formas parte de la comunidad de Spooter</h1>
            <p class="text">Podrás acceder a todos los profesionales que tenemos en nuestra plataforma y además de poder acceder a tus rutinas, estadiscas etc.
            <br />
            <br />
            Haz click en el siguiente enlace para activar tu cuenta</p>
            <div class="button_wrapper">
              <a href="http://localhost:3000/client/active/email/${id}" target= "_blank" class="button">Confirmar mi cuenta</a>
            </div>
          </div>
        </div>`,
  });
};

export const recoverPass = async (id: string, email: string) => {
  await transporter.sendMail({
    from: 'spooter84@gmail.com',
    to: email,
    subject: 'Spooter',
    html: `<head>
        <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
    
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          font-family: Poppins;
          display: flex;
          justify-content: center;
          background-color: black;
          width: 100%;
          height: 30vh;
        }
    
        .wrapper {
          max-width: 535px;
          width: 90%;
          margin: 4rem auto;
        }
    
        .title {
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          color: white;
        }
    
        .text {
          margin-top: 1rem;
          font-size: 16px;
          font-weight: 500;
          color: white;
          text-align: center;
        }
    
        .button_wrapper {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          border: #25d366;
        }
    
        .button {
          all: unset;
          width: 90%;
          max-width: 350px;
          text-align: center;
          padding: 17px 0;
          color: #fff;
          background: #25d366;
          margin: 0 auto;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          transition: 0.4s;
          &:hover {
            background-color: #219c4e;
          }
        }
      </style>
          </head>
          <div class="container">
            <div class="wrapper">
              <h1 class="title">Recuperacion de contraseña de spooter</h1>
              <p class="text">para empezar la recuperación de la contraseña haga click en el siguiente link
              <br />
              <div class="button_wrapper">
                <a href="http://localhost:3000/client/recovered/matiasdeicastelli5@gmail.com" target= "_blank" class="button">Confirmar mi cuenta</a>
              </div>
            </div>
          </div>`,
  });
};
