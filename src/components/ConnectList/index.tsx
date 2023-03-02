import React from "react";
import { ContainerList, Title } from "./styles";
import { Connect } from "../Connect";
import { Connect as ConnectType } from "../../schemas/Models";

interface connectProps {
    connects?: ConnectType[]
}

const ConnectList: React.FC<connectProps> = ({ connects }) => {

    return (
        <ContainerList
            ListHeaderComponent={<Title>Connects:</Title>}
            data={connects}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <Connect connectItem={item as ConnectType} />
            }
        />
    )
}

export { ConnectList }