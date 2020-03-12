import React from 'react'
import { View, StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native'
import { Post } from './Post'

export const PostList = ({ data, onOpen }) => {
	if (!data.length) {
		return (
			<ScrollView>
				<View style={styles.wrapper}>
					<Text style={styles.noItems}>Напишите пост про котиков!</Text>
				</View>
				<View style={styles.imageViewContainer}>
					<Image
						style={styles.imageContainer}
						source={{
							uri:
								'https://avatars.mds.yandex.net/get-pdb/2359302/0fcfd731-ccea-4c36-be41-acd4969ade41/s1200'
						}}
					/>
				</View>
			</ScrollView>
		)
	}

	return (
		<View style={styles.wrapper}>
			<FlatList
				data={data}
				keyExtractor={post => post.id.toString()}
				renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10
	},
	noItems: {
		fontFamily: 'pudelina',
		// fontFamily: 'drina',
		textAlign: 'center',
		marginVertical: 50,
		color: 'darkmagenta',
		fontSize: 48
	},
	imageContainer: {
		
		width: '80%',
		height: 200,

		// justifyContent: 'center'
	},
	imageViewContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 20,
		// marginTop: 10
	}
})
