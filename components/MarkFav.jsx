import { View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Shared from './../Shared/Shared';
import { useUser } from '@clerk/clerk-expo';

export default function MarkFav({ SRM }) {
  const { user } = useUser();
  const [favList, setFavList] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    if (user) {
      GetFav();
    }
  }, [user]);

  const GetFav = async () => {
    setLoading(true); // Set loading to true
    try {
      const result = await Shared.GetFavList(user);
      console.log(result);
      setFavList(result.favorites ? result.favorites : []);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      setFavList([]); // Default to empty array if error occurs
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  const AddToFav = async () => {
    try {
      const favResult = [...favList, SRM?.id];
      await Shared.UpdateFav(user, favResult);
      setFavList(favResult); // Update state immediately
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const removeFromFav = async () => {
    try {
      const favResult = favList.filter(item => item !== SRM?.id);
      await Shared.UpdateFav(user, favResult);
      setFavList(favResult); // Update state immediately
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <View>
      {loading ? null : ( // Optionally show a loader or nothing while loading
        favList?.includes(SRM?.id) ? (
          <Pressable onPress={removeFromFav}>
            <Ionicons name="heart" size={30} color="red" />
          </Pressable>
        ) : (
          <Pressable onPress={AddToFav}>
            <Ionicons name="heart-outline" size={30} color="black" />
          </Pressable>
        )
      )}
    </View>
  );
}