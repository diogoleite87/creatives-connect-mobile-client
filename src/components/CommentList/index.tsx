import React from "react";
import { ContainerList, Title } from "./styles";
import { Comment } from "../Comment";
import { ConnectComment as ConnectCommentType } from "../../schemas/Models";

interface commentProps {
    comments?: ConnectCommentType[]
}

const CommentList: React.FC<commentProps> = ({ comments }) => {

    return (
        <ContainerList
            ListHeaderComponent={<Title>Comentários:</Title>}
            data={comments}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <Comment connectComment={item as ConnectCommentType} />
            }
        />
    )
}

export { CommentList }