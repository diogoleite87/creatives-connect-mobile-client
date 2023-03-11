import React from "react";
import { ButtonRefresh, ContainerList, TextButton, Title } from "./styles";
import { Connect } from "../Connect";
import { Connect as ConnectType } from "../../schemas/Models";

interface connectProps {
    connects?: ConnectType[]
    refresh?: () => void
}

const ConnectList: React.FC<connectProps> = ({ connects, refresh }) => {

    return (
        <ContainerList
            ListHeaderComponent={
                <ButtonRefresh onPress={refresh}>
                    <TextButton>Recarregar</TextButton>
                </ButtonRefresh>
            }
            data={connects}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <Connect connectItem={item as ConnectType} />
            }
        />
    )
}

export { ConnectList }