import React from 'react';
import {View,Text,ScrollView,FlatList} from 'react-native';
import db from '../config';
class SearchBook extends React.Component{

  constructor(){
    super();
    this.state={allTransactions:[]}
  }
  
  componentDidMount=async()=>{
    var query= await db.collection("transactions").get();
    query.docs.map((doc)=>{
      this.setState({allTransactions:[...this.state.allTransactions,doc.data()]})
    })

  }







  render(){
    return(
      <ScrollView>
      {this.state.allTransactions.map((data,index)=>{
        return(
        <View key={index} style={{alignItems:'center'}}>
       <Text>{"Book ID:"+data.bookId}</Text>
       <Text>{"Student ID:"+data.studentId}</Text>
       <Text>{"Date:"+data.date.toDate()}</Text>
       <Text>{"Transaction Type:"+data.transactionType}</Text>

       </View>)
      })}
       
       </ScrollView>
    )
    //    <FlatList
    //     data={this.state.allTransactions}
    //    renderItem={({item})=>{
    //      return(
    //         <View style={{alignItems:'center',borderBottomWidth:2,marginTop:50,paddingBottom:50}}>
    //    <Text>{"Book ID:"+item.bookId}</Text>
    //    <Text>{"Student ID:"+item.studentId}</Text>
    //    <Text>{"Date:"+item.date.toDate()}</Text>
    //    <Text>{"Transaction Type:"+item.transactionType}</Text>

    //    </View>)
         
    //    }}
    //    keyExtractor={(item,index)=>index.toString()}
    //    >
        
       
    
       
    //    </FlatList>

    // );

  }
}

export default SearchBook;
