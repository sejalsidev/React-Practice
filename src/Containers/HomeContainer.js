import {connect} from 'react-redux'
import {addToCart} from '../Services/Actions/Action'
import Index from '../component/Index'

const mapStateToProps=state=>({
    cartData:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)