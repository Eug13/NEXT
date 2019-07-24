const linkStyle = {
    marginRight: 4
  };

const WOD = (props) => (
      <div style={linkStyle}> 
      <h1>WOD</h1>
        <style jsx>{`
        a{
            display: inline-block;
            height: auto:
            margin: 0;
            padding: .55em 2em;
            background: #0056b8;
            font-family: Ubuntu,sans-serif;
            font-weight: 100;
            color: #FFF;
            transition: all 150ms ease;
            text-decoration: none;
            line-height: 1.42857;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            text-transform: uppercase;
            border: 1px solid transparent;
            border-radius: 0;
            white-space: nowrap;
            letter-spacing: 1px;
            font-size: 1.0rem;
          } 
          a:hover{
            background: #681208;
            border-color:  #681208;
          }
          `}</style>
      </div>
  );
  
  export default WOD;