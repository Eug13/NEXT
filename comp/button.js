const linkStyle = {
    marginRight: 4
  };

const Button = (props) => (
      <a style={linkStyle}> {props.name}
        <style jsx>{`
        a{
            display: inline-block;
            height: auto:
            margin: 0;
            padding: .55em 2em;
            background: #fff;
            border:1px solid #0056b8;
            font-family: Ubuntu,sans-serif;
            font-weight: 100;
            color: #0056b8;
            transition: all 150ms ease;
            text-decoration: none;
            line-height: 1.42857;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            text-transform: uppercase;
            border-radius: 0;
            white-space: nowrap;
            letter-spacing: 1px;
            font-size: 1.0rem;
          } 
          a:hover{
            background: #0056b8;
            border-color:  #0056b8;
            color:#fff;
          }
          `}</style>
      </a>
  );
  
  export default Button;