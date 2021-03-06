import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {useParams} from "react-router-dom";
import db from "../firebase";
import {collection, getDocs} from "firebase/firestore"

function Detail() {
    const {id} = useParams()
    const [movie, setMovie] = useState()
    console.log(id)

    useEffect(()=>{
        const movCollection = collection(db, "movies");
        getDocs(movCollection)
        .then((movSnapshot)=>{
            movSnapshot.docs.forEach((doc)=>{
                if(id == doc.id){
                    setMovie(doc.data())
                }
            })
        })
        // const moviesRef = collection(db,'movies' )
        // const q = query(moviesRef, where('id', '==', id))
        // getDocs(q)
        // .then((querySnapshot)=> {
        //     querySnapshot.forEach(doc =>{
        //         setMovie(doc.data())
        //     })
        // })
    }, [])
    return (
        <Container>
            {movie && (
                <>
                <Background>
                <img src={movie.backgroundImg}/>
                </Background>
                <ImageTitle>
                <img src={movie.imageTitle}/>
                </ImageTitle>
                <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                {movie.description}
                </Description>
                </>
            )         
            }          
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    padding: 0 24px;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right: 20px;
    &:hover {
        background: rgb(198, 198, 198)
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249); 
`

const AddButton = styled.button`
    width: 44px; 
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    border: white 2px solid;
    span {
        font-size: 30px;
        color: white;
    } 
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`
