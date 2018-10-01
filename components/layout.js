import Head from 'next/head'

export default ({ children }) => (
  <div>
    <style global jsx>
      {`
        html,
        body {
          background: white;
        }
        a {
          color: black;
          display: inline-block;
          margin: 0 20px;
          position: relative;
          text-decoration: none;
        }
        a:after {
          content: '';
          height: 1px;
          background: black;
          position: absolute;
          pointer-events: none;
          bottom: -5px;
          left: 0;
          right: 0;
          opacity: 0;
          transform: scale(0, 1);
          transition: all 200ms;
        }
        a:hover:after {
          opacity: 1;
          transform: scale(1, 1);
        }
        .container {
          position: absolute;
          overflow: hidden;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          color: black;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-animation: fadein 2s;
          -moz-animation: fadein 2s;
          -ms-animation: fadein 2s;
          -o-animation: fadein 2s;
          animation: fadein 2s;
        }
        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-moz-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @-webkit-keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .introduction {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          font-size: 1.5rem;
          text-align: center;
        }

        .footer {
          color: #666;
          bottom: 20px;
          font-size: 14px;
          position: absolute;
          width: 100%;
          text-align: center;
          margin-bottom: 20px;
        }
        .footer a {
          color: #666;
          margin: 0;
          transition: all 200ms;
        }
        .footer a:hover {
          color: black;
        }
        .left {
          display: inline-block;
          margin-bottom: 30px;
          margin-left: 0;
          margin-right: 30px;
        }
        .right {
          display: inline-block;
        }
        .right a {
          display: inline-block;
          margin-right: 30px;
        }

        @media only screen and (max-width: 40em) {
          .left {
            display: block;
            margin-right: 0;
          }
          .right {
            display: block;
          }
          .right a:last-child {
            margin-right: 0;
          }
        }
      `}
    </style>
    <Head>
      <title>Triam Udom Open House</title>
      <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
      <meta property="og:title" content="Triam Udom Open House 2019" />
      <meta
        property="og:description"
        content="นิทรรศการวิชาการ โรงเรียนเตรียมอุดมศึกษา ประจำปี 2019"
      />
      <meta
        property="og:image"
        content="https://openhouse.triamudom.ac.th/assets/og.png"
      />
    </Head>
    <div className="container">
      <div className="introduction">{children}</div>
      <div className="footer">
        <div className="left">Triam Udom Open House 2019</div>
        <div className="right">
          <a
            href="http://www.triamudom.ac.th/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Triam Udom
          </a>
          <a
            href="https://www.facebook.com/TriamUdomOPH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.facebook.com/triamudomclubs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TUCMC
          </a>
        </div>
      </div>
    </div>
  </div>
)
