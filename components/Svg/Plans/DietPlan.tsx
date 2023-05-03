import { FC } from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { PlanItemImageProps } from '../../../interfaces/plans/Plan';

const DietPlan: FC<PlanItemImageProps> = ({ width, height }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 512.002 512.002'>
      <Circle fill='#F2F2F2' cx='256.001' cy='256.024' r='247.111' />
      <Circle fill='#E6E6E6' cx='256.001' cy='256.024' r='159.581' />
      <Path
        fill='#F97E62'
        d='M209.184,95.775c6.994-4.522,15.803-5.577,23.494-2.382c2.495,1.036,4.888,2.455,7.17,4.371
	c17.891,15.028,28.843,38.053,27.357,63.569c-2.273,39.048-34.148,70.495-73.221,72.283c-44.159,2.021-80.594-33.181-80.594-76.889
	c0-23.916,10.905-45.281,28.013-59.4c0.371-0.307,0.746-0.6,1.124-0.879c8.675-6.448,20.607-6.315,29.535-0.224l2.067,1.41
	c9.488,6.473,21.932,6.625,31.577,0.39L209.184,95.775z'
      />
      <Path
        fill='#E86B56'
        d='M145.392,156.728c0-23.916,10.905-45.281,28.013-59.4c0.043-0.036,0.087-0.066,0.128-0.101
	l-1.471-1.004c-8.928-6.091-20.86-6.224-29.535,0.224c-0.377,0.281-0.751,0.574-1.124,0.879
	c-17.108,14.117-28.013,35.484-28.013,59.4c0,43.708,36.434,78.91,80.594,76.889c4.206-0.193,8.323-0.749,12.335-1.601
	C171.511,224.632,145.392,193.733,145.392,156.728z'
      />
      <Path
        fill='#F4C67D'
        d='M356.421,79.148c5.891,2.055,10.946,4.909,14.209,10.555c8.592,14.872,10.383,33.529,2.955,50.786
	c-11.366,26.41-41.28,40.143-68.725,31.577c-31.019-9.681-47.363-43.144-36.399-73.345c6-16.525,18.894-28.551,34.257-34.015
	c6.003-2.133,11.586-1.064,17.284,1.126l0,0c8.114,11.273,22.196,16.583,35.733,13.474L356.421,79.148z'
      />
      <Path
        fill='#E0B16E'
        d='M326.194,172.066c-31.019-9.681-47.363-43.144-36.399-73.345
	c5.503-15.157,16.815-26.514,30.503-32.509c-0.096-0.129-0.202-0.25-0.296-0.382l0,0c-5.697-2.189-11.28-3.259-17.284-1.126
	c-15.363,5.463-28.257,17.491-34.257,34.015c-10.965,30.201,5.38,63.664,36.399,73.345c9.1,2.84,18.47,3.216,27.347,1.504
	C330.195,173.178,328.187,172.688,326.194,172.066z'
      />
      <G>
        <Path
          fill='#BADB82'
          d='M335.026,287.521c-2.046,19.056,1.234,37.553-20.59,74.906l40.634,23.74
		c21.824-37.354,39.54-43.584,55.143-54.719'
        />
        <Path
          fill='#BADB82'
          d='M444.411,279.95c-1.506-0.879-3.057-1.611-4.635-2.212c3.649-18.079-4.292-37.256-21.106-47.079
		c-16.814-9.823-37.419-7.325-51.377,4.733c-1.298-1.08-2.696-2.072-4.203-2.952c-14.765-8.626-33.725-3.649-42.351,11.114
		c-8.626,14.765-3.651,33.725,11.114,42.351c7.791,4.551,16.749,5.312,24.742,2.85c3.717,7.473,9.572,13.987,17.318,18.511
		c7.744,4.525,16.295,6.426,24.629,5.996c1.779,8.172,6.841,15.603,14.632,20.154c14.765,8.626,33.725,3.649,42.351-11.114
		C464.151,307.538,459.176,288.575,444.411,279.95z'
        />
      </G>
      <Path
        d='M437.021,74.981C388.669,26.629,324.381,0,256.001,0S123.335,26.629,74.983,74.981
	C26.629,123.333,0.001,187.62,0.001,256.001c0,68.044,26.404,132.105,74.348,180.382c3.461,3.485,9.09,3.502,12.571,0.044
	c3.482-3.46,3.502-9.087,0.043-12.571c-44.614-44.927-69.183-104.538-69.183-167.855c0-131.356,106.866-238.222,238.222-238.222
	s238.221,106.866,238.221,238.222S387.357,494.223,256.001,494.223c-54.572,0-105.913-17.952-148.474-51.916
	c-3.837-3.061-9.43-2.433-12.492,1.403c-3.063,3.838-2.434,9.431,1.405,12.494c45.742,36.503,100.919,55.799,159.562,55.799
	c68.379,0,132.668-26.629,181.02-74.981s74.981-112.64,74.981-181.02S485.373,123.333,437.021,74.981z'
      />
      <Path
        d='M395.225,162.497c-2.741-4.074-8.265-5.155-12.337-2.413c-4.074,2.741-5.155,8.265-2.413,12.338
	c6.027,8.956,11.084,18.569,15.031,28.574c1.38,3.495,4.728,5.629,8.272,5.629c1.086,0,2.19-0.2,3.261-0.622
	c4.567-1.803,6.808-6.964,5.006-11.531C407.625,183.275,401.967,172.518,395.225,162.497z'
      />
      <Path
        d='M94.731,209.891c-4.261,14.93-6.422,30.444-6.422,46.109c0,92.466,75.226,167.692,167.692,167.692
	c22.633,0,44.596-4.435,65.276-13.181c4.521-1.913,6.637-7.128,4.723-11.65c-1.912-4.522-7.128-6.636-11.65-4.724
	c-18.477,7.814-38.108,11.778-58.35,11.778c-82.662,0-149.913-67.251-149.913-149.913c0-14.015,1.931-27.888,5.739-41.231
	c1.348-4.721-1.388-9.64-6.108-10.987C100.994,202.437,96.079,205.169,94.731,209.891z'
      />
      <Path
        d='M116.587,132.933c-4.805-0.955-9.493,2.176-10.447,6.992c-1.087,5.491-1.639,11.137-1.639,16.777
	c0,23.679,9.432,45.73,26.56,62.091c16.136,15.415,37.044,23.771,59.254,23.77c1.354,0,2.712-0.031,4.075-0.094
	c21.098-0.966,41.075-9.746,56.249-24.723c14.458-14.27,23.326-32.972,25.196-52.936c7.306,7.162,16.26,12.556,26.375,15.714
	c6.305,1.969,12.816,2.945,19.325,2.945c9.36,0,18.713-2.022,27.428-6.025c14.775-6.788,26.42-18.674,32.787-33.469
	c8.28-19.238,7.033-40.651-3.425-58.749c-5.112-8.844-13.278-12.511-18.977-14.499c-1.581-0.552-3.287-0.646-4.919-0.27
	l-0.685,0.158c-10.072,2.312-20.488-1.613-26.528-10.003c-1.011-1.405-2.41-2.484-4.025-3.105
	c-5.535-2.126-13.989-4.567-23.451-1.203c-18.495,6.577-32.941,20.922-39.635,39.357c-0.94,2.589-1.691,5.208-2.297,7.844
	c-3.597-4.532-7.686-8.747-12.242-12.574c-2.873-2.412-6.061-4.355-9.477-5.773c-10.254-4.257-22.114-3.089-31.73,3.127
	l-3.479,2.248c-6.656,4.305-15.19,4.201-21.741-0.268l-2.067-1.41c-12.246-8.354-28.261-8.179-39.847,0.433
	c-0.495,0.369-0.988,0.754-1.48,1.159c-7.53,6.215-13.902,13.597-18.939,21.941c-2.538,4.203-1.186,9.667,3.016,12.204
	c4.205,2.536,9.667,1.186,12.204-3.016c3.998-6.622,9.056-12.482,15.034-17.415c0.254-0.21,0.511-0.41,0.77-0.603
	c5.507-4.094,13.232-4.101,19.222-0.015l2.067,1.41c12.477,8.511,28.734,8.71,41.412,0.511l3.479-2.248
	c4.703-3.04,10.408-3.652,15.258-1.637c1.766,0.734,3.358,1.704,4.862,2.968c16.648,13.983,25.467,34.483,24.2,56.246
	c-1.996,34.272-30.438,62.349-64.753,63.92c-18.823,0.863-36.662-5.805-50.235-18.772c-13.582-12.975-21.063-30.461-21.063-49.236
	c0-4.484,0.437-8.966,1.301-13.322C124.534,138.564,121.404,133.886,116.587,132.933z M276.816,101.729
	c4.876-13.429,15.402-23.88,28.878-28.673c1.192-0.423,2.401-0.639,3.713-0.639c1.54,0,3.219,0.298,5.172,0.904
	c9.979,12.075,25.65,17.83,41.117,15.037c3.633,1.533,5.801,3.283,7.235,5.765c7.62,13.187,8.525,28.795,2.489,42.825
	c-9.507,22.087-34.948,33.772-57.913,26.606c-12.6-3.933-22.754-12.588-28.593-24.371
	C273.073,127.393,272.328,114.091,276.816,101.729z'
      />
      <Path
        d='M423.156,222.957c-17.63-10.3-39.382-9.527-56.108,1.477c-9.073-5.12-19.592-6.483-29.689-3.833
	c-10.297,2.702-18.924,9.252-24.293,18.442c-10.749,18.399-5.04,41.949,12.617,53.466c-0.111,1.638-0.206,3.263-0.297,4.862
	c-0.894,15.625-1.818,31.782-18.624,60.547c-2.477,4.238-1.049,9.682,3.191,12.159l40.634,23.74
	c1.372,0.802,2.922,1.214,4.484,1.214c0.755,0,1.514-0.096,2.257-0.292c2.28-0.599,4.229-2.078,5.418-4.114
	c12.98-22.217,23.985-32.071,32.124-38.174c3.927-2.945,4.723-8.517,1.778-12.445c-2.945-3.927-8.516-4.723-12.445-1.778
	c-12.168,9.125-22.3,20.373-32.176,35.839l-25.583-14.947c14.704-27.738,15.834-45.721,16.674-60.396
	c2.994,0.329,6.023,0.34,9.028-0.012c4.447,6.608,10.331,12.138,17.287,16.202s14.661,6.473,22.601,7.103
	c3.32,7.926,9.154,14.661,16.66,19.046c6.303,3.683,13.212,5.433,20.034,5.433c13.711,0,27.074-7.071,34.476-19.739
	c10.982-18.797,4.785-42.972-13.781-54.198C450.791,252.585,440.784,233.257,423.156,222.957z M447.851,317.79
	c-6.138,10.508-19.682,14.064-30.193,7.925c-5.395-3.152-9.099-8.255-10.43-14.37c-0.892-4.102-4.524-6.999-8.681-6.999
	c-0.154,0-0.309,0.004-0.465,0.012c-6.887,0.358-13.706-1.3-19.686-4.793c-5.978-3.494-10.766-8.61-13.842-14.795
	c-1.938-3.899-6.417-5.82-10.576-4.537c-5.985,1.843-12.247,1.12-17.641-2.029c-10.507-6.14-14.062-19.683-7.923-30.193
	c2.975-5.089,7.753-8.717,13.455-10.214c5.703-1.498,11.647-0.683,16.736,2.291c1.038,0.607,2.049,1.317,3.006,2.112
	c3.34,2.778,8.202,2.734,11.495-0.108c11.474-9.913,27.982-11.435,41.081-3.783c13.093,7.651,19.877,22.779,16.875,37.646
	c-0.861,4.261,1.487,8.52,5.551,10.066c1.163,0.443,2.277,0.973,3.312,1.579c0.001,0,0.001,0,0.002,0
	C450.436,293.739,453.99,307.282,447.851,317.79z'
      />
      <Circle cx='251.924' cy='332.33' r='8.889' />
      <Circle cx='233.422' cy='296.773' r='8.889' />
      <Circle cx='208.212' cy='328.775' r='8.889' />
      <Circle cx='182.682' cy='341.22' r='8.889' />
      <Circle cx='168.376' cy='309.218' r='8.889' />
      <Circle cx='198.6' cy='293.217' r='8.889' />
      <Circle cx='208.212' cy='261.216' r='8.889' />
      <Circle cx='166.598' cy='277.216' r='8.889' />
    </Svg>
  );
};

export default DietPlan;