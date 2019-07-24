import Link from 'next/link';
import Button from './button';
import Whiteboard from './whiteBoard';
const headStyles = {
  borderBottom:"1px solid #DDD",
  paddingBottom:5
};
const Header = () => (
    <div style={headStyles}>
    <Link href="/">
      <Whiteboard name="Whiteboard CROSSFIT RIVNE"/>
    </Link>

    <Link href="/">
      <Button name="Home"/>
    </Link>
    <Link href="/about">
      <Button name="About"/>
    </Link>
  </div>
  );
  
  export default Header;

