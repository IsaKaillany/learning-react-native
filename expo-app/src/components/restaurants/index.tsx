import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { RestaurantsItem } from "./horizontal";

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string;
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch(
                "http://26.80.18.246:3000/restaurants"
            );
            const data = await response.json();
            setRestaurants(data);
        }

        getRestaurants();
    }, []);

    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantsItem item={item} />}
            horizontal={true}
            contentContainerStyle={{
                gap: 14,
                paddingLeft: 16,
                paddingRight: 16,
            }}
            showsHorizontalScrollIndicator={false}
        />
    );
}
