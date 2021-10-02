import React, { Fragment } from "react"
import styled from "styled-components"

const MaxWidth = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`
const SafeMargin = styled.div`
  margin: 0 20px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`
const LeftGrid = styled.div`
  img {
    max-width: 620px;

    @media screen and (max-width: 660px) {
      max-width: 440px;
      margin: auto;
    }
  }
`
const RightGrid = styled.div`
  padding: 18px 40px;

  @media screen and (max-width: 1040px) {
    padding: 40px 10px;
  }
  h6 {
    span {
      font-weight: 100;
    }
  }
`
const Flex = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin: 60px;
  }
`
const Spacer = styled.div`
  margin-bottom: 20px;
`

const ProjectView = ({ Images, Infos, VideoUrl, children }) => {
  return (
    <Fragment>
      <MaxWidth>
        <SafeMargin>
          <Flex>
            <h1>Summary</h1>
          </Flex>
          <Grid>
            <LeftGrid>
              <img src={Images[0].src} alt={Images[0].alt} />
            </LeftGrid>
            <RightGrid>
              <h3>AT A GLANCE</h3>
              {Infos.map((info) => {
                return (
                  <h6>
                    {info.title} <span>{info.content}</span>
                  </h6>
                )
              })}
            </RightGrid>
          </Grid>
          <Flex>
            <h1>Gallery</h1>
          </Flex>
          <div>{children}</div>
          <Flex>
            <h1>Video Tour</h1>
          </Flex>
          <Flex>
            <Spacer>
              <iframe
                width="560"
                height="315"
                src={VideoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Spacer>
          </Flex>
        </SafeMargin>
      </MaxWidth>
    </Fragment>
  )
}

export default ProjectView
