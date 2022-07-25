import { Col, Row,Card} from 'antd';
import React from 'react';
import './Post.css'

class Post extends React.Component{
   render(){
       return(
           <>
               <Card title={this.props.hole_number} extra={<a href="#">查看</a>} style={{ width: 300 }}>
                   <Row>
                       <Col span={24}>{this.props.post_content}</Col>
                   </Row>

               </Card>
           </>
       )
   }

}
export default Post;