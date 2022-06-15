import React, {useMemo} from 'react';

export const Logo = React.memo<{color?: string; width?: number}>(({color, width}) => {
  const height = useMemo(() => Math.floor((29 / 221) * (width ?? 221)), [width]);
  return (
    <svg
      width={width ?? 221}
      height={width ? height : 29}
      viewBox='0 0 221 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.46291 19.8058C5.63634 21.0615 5.97699 22.0002 6.48488 22.6219C7.41395 23.7533 9.00575 24.319 11.2603 24.319C12.6105 24.319 13.7068 24.1698 14.5492 23.8714C16.1472 23.2995 16.9462 22.2364 16.9462 20.6823C16.9462 19.7747 16.5498 19.0722 15.757 18.5749C14.9642 18.09 13.7192 17.6611 12.0221 17.2881L9.12343 16.6354C6.27429 15.9888 4.30468 15.2864 3.21457 14.528C1.36882 13.2598 0.445952 11.2767 0.445952 8.57877C0.445952 6.11704 1.33786 4.07181 3.12166 2.44309C4.90547 0.814362 7.52544 0 10.9816 0C13.8679 0 16.3268 0.770846 18.3584 2.31254C20.4023 3.8418 21.4738 6.06731 21.5729 8.98906H16.0728C15.9737 7.33547 15.2553 6.16055 13.9174 5.46431C13.0255 5.00428 11.9168 4.77427 10.5914 4.77427C9.11724 4.77427 7.94042 5.07267 7.06091 5.66945C6.18139 6.26624 5.74163 7.09925 5.74163 8.16849C5.74163 9.15069 6.1752 9.88424 7.04232 10.3691C7.59976 10.6924 8.78897 11.0716 10.6099 11.5067L15.3296 12.6444C17.3983 13.1417 18.9591 13.8069 20.0121 14.6399C21.6472 15.9329 22.4648 17.8041 22.4648 20.2534C22.4648 22.7648 21.5048 24.8536 19.5847 26.5196C17.677 28.1732 14.9766 29 11.4833 29C7.91565 29 5.10987 28.1856 3.06592 26.5569C1.02197 24.9157 0 22.6654 0 19.8058H5.46291Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M33.5021 24.5055C35.0506 24.5055 36.2398 23.9522 37.0698 22.8457C37.8997 21.7391 38.3147 20.1664 38.3147 18.1273C38.3147 16.0883 37.8997 14.5218 37.0698 13.4277C36.2398 12.3211 35.0506 11.7679 33.5021 11.7679C31.9537 11.7679 30.7583 12.3211 29.9159 13.4277C29.086 14.5218 28.671 16.0883 28.671 18.1273C28.671 20.1664 29.086 21.7391 29.9159 22.8457C30.7583 23.9522 31.9537 24.5055 33.5021 24.5055ZM43.8705 18.1273C43.8705 21.1113 43.0158 23.6662 41.3063 25.7923C39.5968 27.9059 37.0016 28.9627 33.5207 28.9627C30.0398 28.9627 27.4446 27.9059 25.7351 25.7923C24.0257 23.6662 23.1709 21.1113 23.1709 18.1273C23.1709 15.1931 24.0257 12.6506 25.7351 10.4997C27.4446 8.34878 30.0398 7.27332 33.5207 7.27332C37.0016 7.27332 39.5968 8.34878 41.3063 10.4997C43.0158 12.6506 43.8705 15.1931 43.8705 18.1273Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M57.9614 15.2553C57.8623 14.4969 57.6083 13.8131 57.1995 13.2039C56.6049 12.3833 55.6821 11.973 54.4309 11.973C52.6471 11.973 51.4269 12.862 50.7704 14.6399C50.4235 15.5848 50.2501 16.8405 50.2501 18.4071C50.2501 19.899 50.4235 21.0988 50.7704 22.0064C51.4021 23.6973 52.5914 24.5428 54.338 24.5428C55.5768 24.5428 56.4563 24.2071 56.9766 23.5357C57.4968 22.8643 57.8127 21.994 57.9242 20.9248H63.3314C63.2075 22.5411 62.6253 24.0703 61.5847 25.5125C59.9248 27.8375 57.4659 29 54.2079 29C50.95 29 48.553 28.0302 47.017 26.0907C45.4809 24.1511 44.7129 21.6334 44.7129 18.5376C44.7129 15.0439 45.5614 12.3273 47.2585 10.3878C48.9556 8.44824 51.2969 7.47847 54.2823 7.47847C56.8217 7.47847 58.8966 8.05038 60.507 9.19422C62.1298 10.3381 63.0898 12.3584 63.3871 15.2553H57.9614Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M77.4495 15.2553C77.3504 14.4969 77.0965 13.8131 76.6877 13.2039C76.0931 12.3833 75.1702 11.973 73.9191 11.973C72.1352 11.973 70.9151 12.862 70.2585 14.6399C69.9117 15.5848 69.7383 16.8405 69.7383 18.4071C69.7383 19.899 69.9117 21.0988 70.2585 22.0064C70.8903 23.6973 72.0795 24.5428 73.8261 24.5428C75.0649 24.5428 75.9444 24.2071 76.4647 23.5357C76.985 22.8643 77.3009 21.994 77.4123 20.9248H82.8195C82.6956 22.5411 82.1134 24.0703 81.0729 25.5125C79.4129 27.8375 76.954 29 73.6961 29C70.4381 29 68.0412 28.0302 66.5051 26.0907C64.969 24.1511 64.201 21.6334 64.201 18.5376C64.201 15.0439 65.0496 12.3273 66.7467 10.3878C68.4438 8.44824 70.785 7.47847 73.7704 7.47847C76.3098 7.47847 78.3848 8.05038 79.9951 9.19422C81.6179 10.3381 82.5779 12.3584 82.8753 15.2553H77.4495Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M93.5508 11.8425C92.3244 11.8425 91.3706 12.2279 90.6893 12.9987C90.0203 13.7696 89.5992 14.8139 89.4257 16.1318H97.6573C97.5705 14.7269 97.1432 13.6639 96.3752 12.9428C95.6195 12.2092 94.6781 11.8425 93.5508 11.8425ZM93.5508 7.45982C95.2355 7.45982 96.753 7.77686 98.1032 8.41094C99.4535 9.04503 100.568 10.0459 101.448 11.4135C102.241 12.6195 102.755 14.0182 102.99 15.6097C103.126 16.5421 103.182 17.8849 103.157 19.6379H89.2957C89.37 21.677 90.008 23.1068 91.2096 23.9273C91.9404 24.4371 92.8199 24.692 93.8481 24.692C94.9382 24.692 95.8239 24.3811 96.5052 23.7595C96.8769 23.4238 97.2051 22.9576 97.49 22.3608H102.897C102.761 23.5668 102.135 24.7914 101.021 26.0347C99.2862 28.0116 96.8583 29 93.7366 29C91.16 29 88.8869 28.167 86.9173 26.501C84.9476 24.8349 83.9628 22.1246 83.9628 18.3698C83.9628 14.8512 84.8485 12.1533 86.62 10.2759C88.4038 8.39851 90.7141 7.45982 93.5508 7.45982Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M115.63 8.18715C115.729 8.18715 115.809 8.19337 115.871 8.2058C115.945 8.2058 116.1 8.21202 116.336 8.22445V13.6701C116.001 13.6328 115.704 13.6079 115.444 13.5955C115.184 13.5831 114.973 13.5769 114.812 13.5769C112.681 13.5769 111.251 14.2731 110.52 15.6656C110.111 16.4489 109.907 17.6549 109.907 19.2836V29H104.574V8.67204H109.628V12.2154C110.445 10.8602 111.158 9.93399 111.765 9.43667C112.756 8.60366 114.044 8.18715 115.63 8.18715Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M142.526 10.0845C142.526 8.64536 142.148 7.61922 141.394 7.00604C140.652 6.39286 139.606 6.08627 138.258 6.08627H132.932V14.2328H138.258C139.606 14.2328 140.652 13.9012 141.394 13.238C142.148 12.5747 142.526 11.5236 142.526 10.0845ZM148.186 10.0469C148.186 13.313 147.369 15.6219 145.736 16.9734C144.103 18.3249 141.771 19.0006 138.74 19.0006H132.932V28.9491H127.254V1.28094H139.167C141.913 1.28094 144.103 1.99423 145.736 3.42081C147.369 4.8474 148.186 7.0561 148.186 10.0469Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M158.441 24.4629C159.988 24.4629 161.175 23.906 162.004 22.7923C162.833 21.6786 163.248 20.0956 163.248 18.0433C163.248 15.991 162.833 14.4143 162.004 13.313C161.175 12.1993 159.988 11.6424 158.441 11.6424C156.895 11.6424 155.701 12.1993 154.86 13.313C154.031 14.4143 153.617 15.991 153.617 18.0433C153.617 20.0956 154.031 21.6786 154.86 22.7923C155.701 23.906 156.895 24.4629 158.441 24.4629ZM168.796 18.0433C168.796 21.0466 167.942 23.6182 166.235 25.7581C164.528 27.8855 161.936 28.9491 158.46 28.9491C154.984 28.9491 152.392 27.8855 150.685 25.7581C148.978 23.6182 148.124 21.0466 148.124 18.0433C148.124 15.09 148.978 12.5309 150.685 10.366C152.392 8.20112 154.984 7.11867 158.46 7.11867C161.936 7.11867 164.528 8.20112 166.235 10.366C167.942 12.5309 168.796 15.09 168.796 18.0433Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M180.871 7.85523C180.97 7.85523 181.05 7.86149 181.112 7.874C181.186 7.874 181.341 7.88026 181.576 7.89277V13.3739C181.242 13.3363 180.945 13.3113 180.685 13.2988C180.425 13.2863 180.215 13.28 180.054 13.28C177.926 13.28 176.498 13.9808 175.768 15.3823C175.359 16.1707 175.155 17.3846 175.155 19.0239V28.8035H169.83V8.34327H174.877V11.9097C175.693 10.5457 176.405 9.61343 177.011 9.11288C178.001 8.27445 179.287 7.85523 180.871 7.85523Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M183.852 2.63544H189.085V8.34177H192.369V12.1522H189.085V22.9642C189.085 23.8027 189.19 24.3283 189.4 24.541C189.611 24.7412 190.254 24.8413 191.33 24.8413C191.491 24.8413 191.658 24.8413 191.831 24.8413C192.017 24.8288 192.196 24.8163 192.369 24.8038V28.802L189.864 28.8958C187.365 28.9834 185.658 28.5454 184.743 27.5819C184.149 26.9687 183.852 26.0239 183.852 24.7475V2.63544Z'
        fill={color ?? '#334D6E'}
      />
      <path
        d='M206.918 18.2873C206.584 18.5 206.243 18.6752 205.897 18.8129C205.563 18.938 205.099 19.0569 204.505 19.1695L203.318 19.3948C202.204 19.595 201.406 19.839 200.924 20.1268C200.108 20.6149 199.699 21.372 199.699 22.3981C199.699 23.3116 199.947 23.9749 200.442 24.3878C200.949 24.7883 201.561 24.9885 202.279 24.9885C203.417 24.9885 204.462 24.6506 205.415 23.9749C206.38 23.2991 206.881 22.0665 206.918 20.277V18.2873ZM203.707 15.7908C204.685 15.6656 205.384 15.5092 205.804 15.3215C206.559 14.9962 206.936 14.4893 206.936 13.8011C206.936 12.9626 206.646 12.387 206.064 12.0742C205.495 11.7488 204.654 11.5861 203.54 11.5861C202.291 11.5861 201.406 11.899 200.887 12.5247C200.516 12.9877 200.268 13.6134 200.145 14.4017H195.042C195.153 12.6123 195.648 11.1419 196.526 9.9906C197.924 8.1886 200.324 7.2876 203.726 7.2876C205.94 7.2876 207.907 7.73184 209.627 8.62033C211.347 9.50882 212.206 11.1857 212.206 13.6509V23.0363C212.206 23.687 212.219 24.4754 212.243 25.4014C212.281 26.1022 212.386 26.5778 212.559 26.828C212.732 27.0783 212.992 27.2848 213.338 27.4475V28.2358H207.586C207.425 27.8229 207.314 27.435 207.252 27.0721C207.19 26.7092 207.14 26.2962 207.103 25.8332C206.373 26.6341 205.532 27.3161 204.58 27.8792C203.441 28.5424 202.155 28.8741 200.72 28.8741C198.889 28.8741 197.374 28.3485 196.174 27.2973C194.986 26.2336 194.392 24.732 194.392 22.7923C194.392 20.277 195.351 18.4562 197.268 17.33C198.32 16.7168 199.866 16.2788 201.907 16.016L203.707 15.7908Z'
        fill={color ?? '#334D6E'}
      />
      <path d='M221 28.9927H215.711V1.32449H221V28.9927Z' fill={color ?? '#334D6E'} />
    </svg>
  );
});
Logo.displayName = 'Logo';
