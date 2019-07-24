import Header from './header';
import WOD from './wod';

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <WOD wod="Workout of the day!"/>
    {props.children}
  </div>
);

export default Layout;