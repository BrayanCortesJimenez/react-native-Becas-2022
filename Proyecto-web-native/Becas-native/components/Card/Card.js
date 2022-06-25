import React from "react";
import { ScrollView, View, StyleSheet} from "react-native";
import { Card, Title, Paragraph, Button, } from "react-native-paper";


function NewsCard({news}){

    return(
        <ScrollView>
            <Card style={styles.carder}>
                <Card.Content >
                    <Title style={styles.fontColor}>{news.title}</Title>
                    <Paragraph style={styles.fontColor}>{news.abstract}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: news.multimedia[1].url} } />
            </Card>
            <View style={styles.seperator}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    seperator: {
      width: 600,
      height: 50,
      backgroundColor: 'black',
    },
    carder:{
        margin:10,
        padding:10,
        backgroundColor:'#6804ec',

    },
    fontColor:{
        color:"white",
    }
  })

export default NewsCard;
