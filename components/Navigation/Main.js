import NavigationHome from './HomePage';
import NavigationOther from './OtherPage';

class NavigationSwitch extends React.Component {
  render() {
    return ((this.props.home) 
    ? <NavigationHome {...this.props} /> 
    : <NavigationOther {...this.props} />)
  }
}
export default NavigationSwitch;