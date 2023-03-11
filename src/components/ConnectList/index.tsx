import React, { useState } from "react";
import { ButtonRefresh, ContainerList, TextButton, Title } from "./styles";
import { Connect } from "../Connect";
import { Connect as ConnectType } from "../../schemas/Models";
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Loading } from "../Loading";

interface connectProps {
    connects?: ConnectType[]
    refresh?: () => void
}

const ConnectList: React.FC<connectProps> = ({ connects, refresh }) => {

    const [refreshing, setRefreshing] = useState<boolean>(false);

    const handleRefresh = async () => {
        setRefreshing(true);

        if (refresh) {
            await refresh()
        }

        setRefreshing(false);
    };

    return (
        <ContainerList
            data={connects}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <Connect connectItem={item as ConnectType} />
            }
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        />
    )
}

export { ConnectList }