/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import styled from "styled-components"
import RViewerJS from "viewerjs-react"
import "viewerjs-react/dist/index.css"

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: auto;
  img {
    width: 100%;
    height: 270px;
  }

  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 200px;
    }
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    img {
      height: 200px;
    }
  }
`
const Flexxxo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Gallery = ({ Images }) => {
  return (
    <RViewerJS>
      <Flexxxo>
        <ImageWrapper>
          {Images.map((image) => {
            return <img src={image.src} alt={image.alt} />
          })}
        </ImageWrapper>
      </Flexxxo>
    </RViewerJS>
  )
}

export default Gallery
