import { FC } from 'react';
import Svg, { G, Path, Polygon, Rect } from 'react-native-svg';
import { PlanItemImageProps } from '../../../interfaces/plans/Plan';

const CGM: FC<PlanItemImageProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 512 512'>
      <Path
        fill="#FEF2CC"
        d='M499.449,176.667C466.055,74.12,369.691,0,256,0C114.615,0,0,114.615,0,256
	c0,113.691,74.12,210.054,176.667,243.449L499.449,176.667z'
      />
      <Path
        fill="#FBD867"
        d='M512,256c0-27.694-4.415-54.353-12.551-79.333l-98.754-98.754L111.304,434.087l65.362,65.362
	C201.647,507.585,228.306,512,256,512C397.385,512,512,397.384,512,256z'
      />
      <Polygon
        fill="#394B48"
        points='256,77.913 111.304,77.913 111.304,434.087 256,434.087 314.92,260.007 '
      />
      <Rect
        x='256'
        y='77.913'
        fill="#263230"
        width='144.696'
        height='356.174'
      />
      <Polygon
        fill="#02C8A7"
        points='378.435,122.435 244.87,111.304 256,178.087 378.435,178.087 '
      />
      <Polygon
        fill="#7DDCD4"
        points='256,111.304 133.565,122.435 133.565,178.087 256,178.087 '
      />
      <Polygon
        fill="#40D2BE"
        points='256,100.174 133.565,100.174 133.565,122.435 256,122.435 283.694,111.304 '
      />
      <Rect
        x='256'
        y='100.174'
        fill="#02AF92"
        width='122.435'
        height='22.261'
      />
      <Polygon
        fill="#4C6460"
        points='256,200.348 111.304,200.348 111.304,244.87 256,244.87 305.954,222.609 '
      />
      <Rect
        x='256'
        y='200.348'
        fill="#394B48"
        width='144.696'
        height='44.522'
      />
      <Rect
        x='133.565'
        y='267.13'
        fill="#B0B7B6"
        width='44.522'
        height='33.391'
      />
      <G>
        <Rect
          x='133.565'
          y='322.783'
          fill="#4C6460"
          width='44.522'
          height='33.391'
        />
        <Rect
          x='133.565'
          y='378.435'
          fill="#4C6460"
          width='44.522'
          height='33.391'
        />
      </G>
      <Rect
        x='200.348'
        y='267.13'
        fill="#B0B7B6"
        width='44.522'
        height='33.391'
      />
      <G>
        <Rect
          x='200.348'
          y='322.783'
          fill="#4C6460"
          width='44.522'
          height='33.391'
        />
        <Rect
          x='200.348'
          y='378.435'
          fill="#4C6460"
          width='44.522'
          height='33.391'
        />
      </G>
      <Rect
        x='267.13'
        y='267.13'
        fill="#889391"
        width='44.522'
        height='33.391'
      />
      <G>
        <Rect
          x='267.13'
          y='322.783'
          fill="#394B48"
          width='44.522'
          height='33.391'
        />
        <Rect
          x='267.13'
          y='378.435'
          fill="#394B48"
          width='44.522'
          height='33.391'
        />
      </G>
      <Rect
        x='333.913'
        y='267.13'
        fill="#889391"
        width='44.522'
        height='33.391'
      />
      <Rect
        x='333.913'
        y='322.783'
        fill="#F63341"
        width='44.522'
        height='89.043'
      />
    </Svg>
  );
};

export default CGM;
