import React, { Component } from "react";
import { View, Text, StyleSheet,Image,ScrollView,TouchableOpacity } from "react-native";
import {Container, Icon, Input} from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';
import {connect} from 'react-redux';

class Home extends Component {
    // _isMounted = false;
    constructor(props) {
        super(props);
        this.state={
            displayFood:this.props.displayFood
        };
    }

    // componentDidMount() {
    //     this._isMounted = true;
    //     if (this._isMounted) {
    //         this.setState({
    //             displayFood: [
    //                 {
    //                     "id": "1",
    //                     "name": "Offers",
    //                     "url": "https://www.barbanews.com/wp-content/uploads/2020/05/mcdonalds.jpg"
    //                 },
    //                 {
    //                     "id": "2",
    //                     "name": "Grocery",
    //                     "url": "https://icisete.fr/wp-content/uploads/2019/04/Burger-King-S%C3%A8te-H%C3%A9rault.jpg"
    //                 },
    //                 {
    //                     "id": "3",
    //                     "name": "Breakfast",
    //                     "url": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg"
    //                 },
    //                 {
    //                     "id": "4",
    //                     "name": "Pizza",
    //                     "url": "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/recette_pizza_legume-768x576.jpg"
    //                 },
    //                 {
    //                     "id": "5",
    //                     "name": "Desert",
    //                     "url": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27230233/gateau-mousse-chocolat-et-cafe.jpeg"
    //                 }
    //             ]
    //         })
    //     }
    // }
    //
    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <View style={styles.headerDeliveroo}>
                    <View style={styles.infoHeader}>
                        <View>
                            <Icon style={styles.mySize} name="bicycle"/>
                        </View>
                        <View>
                            <Text style={styles.colorGray}>Now</Text>
                            <View style={styles.locationCurrent}>
                                <Text style={styles.fontBold}>Current Location</Text>
                                <Icon style={styles.greenDeliveroo} name="chevron-down-outline" />
                            </View>
                        </View>
                    </View>

                    <View style={styles.userCo}>
                        <Icon style={[styles.greenDeliveroo]} name="person-outline" size={30} color="#4F8EF7" />
                    </View>
                </View>

                <View style={[styles.locationCurrent,styles.marginX]}>
                    <Text style={[styles.greenBackground]}>
                        Delivery
                    </Text>
                    <Text style={[styles.greenDeliveroo,styles.marginX]}>
                        Pickup
                    </Text>
                </View>

                <View style={[styles.searchInput,styles.borderRadius]}>
                    <View style={[styles.inputBar,styles.borderRadius]}>
                        <Icon style={[styles.transparentGray,styles.fs_20,styles.pr_5]} name="ios-search"/>
                        <Input placeholder="Dishes, restaurants or cuisines" />
                    </View>
                    <View style={{marginRight: 10}}>
                        <Icon style={[styles.fs_25,styles.greenDeliveroo]} name="options-outline"/>
                    </View>
                </View>

                <ScrollView>
                    <ScrollView horizontal={true} style={styles.scrollView}>
                        {
                            this.state.displayFood.map((value,key) => (
                                <View key={key} style={[styles.mx_5,styles.my_8]}>
                                    <Image style={[styles.image,styles.bdr_10]} source={{uri: value.url}} />
                                    <View style={[styles.w_h,styles.bdr_10]}>
                                        <Text style={styles.txt}>{value.name}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView >

                    <View style={{marginTop:10}}>
                        <ScrollView horizontal={true} style={styles.scrollViewFeatures}>
                            {
                                this.state.displayFood.map((value,key) => (
                                    <View key={key} style={[styles.mx_5,styles.mb13]}>
                                        <View style={{position: 'relative'}}>
                                            <View style={[styles.freeDel,styles.br5,{backgroundColor:"#01cdbb", bottom:0}]}>
                                                <Text style={{color:'whitesmoke',}}>Je commande</Text>
                                            </View>
                                            <Image style={[styles.imagesFeatures,styles.br8]} source={{uri: value.url}}/>
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>

                    <View style={[styles.mx_15,styles.mt_15]}>
                        <Text style={styles.features}>Featured</Text>
                    </View>

                    <View>
                        <ScrollView horizontal={true} style={styles.scrollViewFeatures}>
                            {
                                this.state.displayFood.map((value,key) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('detailScreen', {item: value})} key={key} style={[styles.mx_5,styles.mb13]}>
                                        <View style={{position: 'relative'}}>
                                            <View style={[styles.freeDel,styles.br5]}>
                                                <Text style={{color:'whitesmoke',}}>Free delivery</Text>
                                            </View>

                                            <SharedElement id={`item.${value.id}.photo`}>
                                                <Image style={[styles.imagesFeatures,styles.br8]} source={{uri: value.url}} />
                                            </SharedElement>

                                            <View style={{position:'absolute',zIndex: 999,bottom:-8, right:0 , marginRight:20 ,backgroundColor:"whitesmoke",paddingVertical:4,paddingHorizontal:14, borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,borderColor:"#d4d4d4",
                                                borderWidth: 1}}
                                            >
                                                <Text style={{color:'black', width:50, textAlign:'center',fontWeight:'bold'}}>40 - 60 <Text style={{color:"#b3b3b3"}}>min</Text></Text>
                                            </View>
                                        </View>
                                        <Text style={styles.fwb}>Chicken Class By Urban Kitchens</Text>
                                        <View style={styles.txtFeatures}>
                                            <Text style={styles.transparentGray}><Icon style={styles.star} name="star"/> <Text style={styles.blue}>4.4 Very Good American</Text> - Chicken - Fried chicken - Salads</Text>
                                        </View>
                                        <Text style={styles.transparentGray}>4.6 km away - Free delivery</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mb13:{
        marginBottom: 13
    },
    freeDel:{
        position: 'absolute',
        zIndex:22,
        backgroundColor:'#ff6399',
        padding: 5,
        margin: 10
    },
    fwb:{
        fontWeight:"bold",
        marginTop:10
    },
    blue:{
        color:"#4274a2"
    },
    star:{
        fontSize:15,
    },
    txtFeatures:{
        width:250,
        flexDirection:'row',
    },
    scrollViewFeatures:{
        marginHorizontal: 10,
    },
    br5:{
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    br8:{
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    imagesFeatures:{
        width:250,
        height:180,
    },
    features:{
        fontWeight:'bold',
        fontSize:18
    },
    my_8:{
        marginVertical:8,
        height: 100
    },
    mx_15:{
        marginHorizontal:15
    },
    mt_15:{
        marginVertical: 6
    },
    mx_5:{
        marginHorizontal:5,
    },
    scrollView:{
        marginHorizontal: 10,
        maxHeight: 120
    },
    w_h:{
        position: 'absolute',
        width:100,
        height:100,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    txt:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        color:'whitesmoke',
        fontWeight:'bold',
    },
    bdr_10:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    image: {
        width:100,
        height:100,
        padding:10,
    },
    headerDeliveroo:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    infoHeader:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
    },
    locationCurrent:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    mySize:{
        fontSize:45,
        marginRight: 5,
        marginLeft:15
    },
    fontBold:{
        fontWeight:'bold',
        fontSize: 18
    },
    colorGray:{
        color:"#a5a5a5",
    },
    greenDeliveroo:{
        color: "#01cdbb"
    },
    greenBackground:{
        backgroundColor: "#01cdbb",
        color:'whitesmoke',
        paddingVertical:3,
        fontWeight: 'bold',
        paddingHorizontal:12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    userCo:{
        margin:15,
        padding:10,
        backgroundColor:"#f8f8f6",
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100
    },
    btn:{
        width: 100,
    },
    marginX:{
        marginHorizontal: 10
    },
    inputBar:{
        flexDirection: 'row',
        alignItems:'center',
        width:340,
        backgroundColor:"#f3f4f6",
        marginTop:10,
        marginBottom:15,
    },
    transparentGray:{
        color:"#b0b0b0"
    },
    pr_5:{
        paddingRight:5,
        marginLeft: 15
    },
    fs_20:{
        fontSize:20
    },
    fs_25:{
        fontSize:28,
        backgroundColor:'#ffffff',
    },
    searchInput:{
        borderBottomColor:"#d4d4d4",
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    borderRadius:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});

const mapStateToProps = state => {
    return {
        displayFood: state.ParametersStore.displayFood
    }
}
// export default Home;
export default connect(
    mapStateToProps
)(Home)
