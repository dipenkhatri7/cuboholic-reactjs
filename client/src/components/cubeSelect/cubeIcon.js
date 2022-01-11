import './cubeIcon.css'
function CubeSelect() {
    return (
        <section className="cubeSelector">
    <svg  width="113.199" height="129.125"
      viewBox="0 0 113.199 129.125" className="cubeIcon" id="cubeSelect">
      <defs>
        <filter id="Path_2" x="0" y="0" width="113.199" height="113.199" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
        </filter>
        <filter id="Path_2-2" x="0" y="0" width="113.199" height="113.199" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur-2" />
          <feFlood flood-opacity="0.161" result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur-2" />
          <feComposite operator="in" in="color" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_34" data-name="Group 34" transform="translate(-762.992 -44.375)">
        <g id="Group_25" data-name="Group 25" transform="translate(511.193 -303.1)">
          <g id="Group_24" data-name="Group 24">
            <g data-type="innerShadowGroup">
              <g transform="matrix(1, 0, 0, 1, 251.8, 347.47)" filter="url(#Path_2)">
                <path id="Path_2-3" data-name="Path 2"
                  d="M114.3,354.8l-.183.233-.184.231-.186.23-.187.229-.189.228-.19.227-.192.226-.193.224-.194.223-.2.222-.2.221-.2.219-.2.218-.2.217-.2.216-.2.214-.205.213-.207.212-.208.211-.209.209-.211.208-.212.207-.213.205-.215.2-.216.2-.217.2-.218.2-.22.2-.221.2-.222.2-.223.194-.224.193-.226.191-.227.19-.228.189-.229.187-.23.186-.232.184-.233.183-.234.181-.235.18-.236.178-.237.177-.238.175-.239.174-.241.172-.242.171-.243.169-.244.168-.245.166-.246.165-.247.163-.248.162-.249.16-.25.159-.251.157-.252.155-.253.154-.254.152-.255.151-.256.149-.257.147-.258.146-.258.144-.259.142-.26.141-.261.139-.262.138-.263.136-.264.134-.265.133-.265.131-.266.129-.267.128-.268.126-.269.124-.269.123-.27.121-.271.119-.272.117-.272.116-.273.114-.274.112-.274.111-.275.109-.276.107-.277.105-.277.1-.278.1-.278.1-.279.1-.28.1-.28.095-.281.093-.281.091-.282.09-.283.088-.283.086-.284.084-.284.082-.285.081-.285.079-.286.077-.286.075-.287.074-.287.072-.288.07-.288.068-.288.066-.289.064-.289.063-.29.061-.29.059-.29.057-.291.055-.291.054-.291.052-.292.05-.292.048-.292.046-.293.044-.293.043-.293.041-.293.039-.294.037-.294.035-.294.033-.294.031-.294.03-.295.028-.295.026-.295.024-.3.022-.3.02-.3.018-.3.017-.3.015-.3.013-.3.011-.3.009-.3.007-.3.005-.3,0-.3,0h-.3l-.3,0-.3,0-.3-.006-.3-.008-.3-.009-.3-.011-.3-.013-.3-.015-.3-.017-.3-.019-.3-.021-.3-.022-.295-.024-.295-.026-.295-.028-.294-.03L72,372.62l-.294-.033-.294-.035-.294-.037-.293-.039-.293-.041-.293-.043-.293-.045-.292-.046-.292-.048-.292-.05-.291-.052-.291-.054-.291-.056-.29-.057-.29-.059-.29-.061-.289-.063-.289-.065-.288-.066-.288-.068-.288-.07-.287-.072-.287-.074-.286-.075-.286-.077-.285-.079-.285-.081-.284-.083-.284-.084-.283-.086-.283-.088-.282-.09-.281-.092-.281-.093-.28-.1-.28-.1-.279-.1-.278-.1-.278-.1-.277-.1-.276-.106-.276-.107-.275-.109-.274-.111-.274-.112-.273-.114-.272-.116-.272-.118-.271-.119-.27-.121-.269-.123-.269-.124-.268-.126-.267-.128-.266-.129-.265-.131-.264-.133-.264-.134-.263-.136-.262-.138-.261-.139-.26-.141L54.353,367l-.258-.144-.257-.146-.257-.148-.256-.149-.255-.151-.254-.152-.253-.154-.252-.155-.251-.157-.25-.159-.249-.16-.248-.162L51.068,365l-.246-.165-.245-.166-.244-.168-.243-.169-.242-.171-.24-.173-.239-.174-.238-.176-.237-.177-.236-.178-.235-.18-.234-.181-.233-.183-.231-.184-.23-.186-.229-.187-.228-.189-.227-.19-.226-.192-.224-.193-.223-.194-.222-.2-.221-.2-.219-.2-.218-.2-.217-.2-.216-.2-.214-.2-.213-.205-.212-.207-.211-.208L43.766,359l-.208-.211-.207-.212-.205-.213-.2-.215-.2-.216-.2-.217-.2-.218-.2-.22-.2-.221-.2-.222-.194-.223-.193-.224-.191-.226-.19-.227-.189-.228-.187-.229-.186-.23-.184-.232-.183-.233-.181-.234-.18-.235-.178-.236-.177-.237-.175-.238-.174-.239-.172-.241-.171-.242-.169-.243-.168-.244-.166-.245-.165-.246-.163-.247-.162-.248-.16-.249-.158-.25-.157-.251-.155-.252-.154-.253-.152-.254-.151-.255-.149-.256-.147-.257-.146-.258-.144-.258-.142-.259-.141-.26-.139-.261-.138-.262-.136-.263-.134-.264-.133-.265-.131-.265-.129-.266-.128-.267-.126-.268-.124-.269-.123-.269-.121-.27-.119-.271-.117-.272-.116-.272-.114-.273-.112-.274-.111-.274-.109-.275-.107-.276-.105-.277-.1-.277-.1-.278-.1-.278-.1-.279-.1-.28-.095-.28-.093-.281-.091-.281-.09-.282-.088-.283-.086-.283-.084-.284-.082-.284-.081-.285-.079-.285-.077-.286-.075-.286-.074-.287-.072-.287-.07-.288-.068-.288-.066-.288-.064-.289-.063-.289-.061-.29-.059-.29-.057-.29-.055-.291-.054-.291-.052-.291-.05-.292-.048-.292-.046-.292-.044-.293-.043-.293-.041-.293-.039-.293-.037-.294-.035-.294-.033-.294-.031-.294-.03-.294-.028-.295-.026-.295-.024-.295-.022-.3-.02-.3-.018-.3-.017-.3-.015-.3-.013-.3-.011-.3-.009-.3-.007-.3-.005-.3,0-.3,0-.3v-.3l0-.3,0-.3.006-.3.008-.3.009-.3.011-.3.013-.3.015-.3.017-.3.019-.3.021-.3.022-.3.024-.295.026-.295.028-.295.03-.294.032-.294.033-.294.035-.294.037-.294.039-.293.041-.293.043-.293.045-.293.046-.292.048-.292.05-.292.052-.291.054-.291.056-.291.057-.29.059-.29.061-.29.063-.289.065-.289.066-.288.068-.288.07-.288.072-.287.074-.287.075-.286.077-.286.079-.285.081-.285L32,312.51l.084-.284.086-.283.088-.283.09-.282.092-.281.093-.281.1-.28.1-.28.1-.279.1-.278.1-.278.1-.277.106-.276.107-.276.109-.275.111-.274.112-.274.114-.273.116-.272.118-.272.119-.271.121-.27.123-.269.124-.269.126-.268.128-.267.129-.266.131-.265.133-.264.134-.264.136-.263.138-.262.139-.261.141-.26.143-.259.144-.258.146-.257.148-.257.149-.256.151-.255.152-.254.154-.253.155-.252.157-.251.159-.25.16-.249.162-.248.163-.247.165-.246.166-.245.168-.244.169-.243.171-.242.173-.24.174-.239.176-.238.177-.237.179-.236.18-.235.181-.234.183-.233.184-.231.186-.23.187-.229.189-.228.19-.227.192-.226.193-.224.194-.223.2-.222.2-.221.2-.219.2-.218.2-.217.2-.216.2-.214.205-.213.207-.212.208-.211.209-.209.211-.208.212-.207.213-.205.215-.2.216-.2.217-.2.218-.2.22-.2.221-.2.222-.2.223-.194.224-.193.226-.191.227-.19.228-.189.229-.187.23-.186.232-.184.233-.183.234-.181.235-.18.236-.178.237-.177.238-.175.239-.174.241-.172.242-.171.243-.169.244-.168.245-.166.246-.165.247-.163.248-.162.249-.16.25-.159.251-.157.252-.155.253-.154.254-.152.255-.151.256-.149.257-.147.258-.146.258-.144.259-.142.26-.141.261-.139.262-.138.263-.136.264-.134.265-.133.265-.131.266-.129.267-.128.268-.126.269-.124.269-.123.27-.121.271-.119.272-.117.272-.116.273-.114.274-.112.274-.111.275-.109.276-.107.277-.105.277-.1.278-.1.278-.1.279-.1.28-.1.28-.095.281-.093.281-.091.282-.09.283-.088.283-.086.284-.084.284-.082.285-.081.285-.079.286-.077.286-.075.287-.074.287-.072L66.2,280l.288-.068.288-.066.289-.064.289-.063.29-.061.29-.059.29-.057.291-.055.291-.054.291-.052.292-.05.292-.048.292-.046.293-.044.293-.043.293-.041.293-.039.294-.037.294-.035.294-.033.294-.031.294-.03.295-.028.295-.026.295-.024.3-.022.3-.02.3-.018.3-.017.3-.015.3-.013.3-.011.3-.009.3-.007.3-.005.3,0,.3,0h.3l.3,0,.3,0,.3.006.3.008.3.009.3.011.3.013.3.015.3.017.3.019.3.021.3.022.295.024.295.026.295.028.294.03.294.032.294.033.294.035.294.037.293.039.293.041.293.043.293.045.292.046.292.048.292.05.291.052.291.054.291.056.29.057.29.059.29.061.289.063.289.065.288.066.288.068.288.07.287.072.287.074.286.075.286.077.285.079.285.081.284.083.284.084.283.086.283.088.282.09.281.092.281.093.28.1.28.1.279.1.278.1.278.1.277.1.276.106.276.107.275.109.274.111.274.112.273.114.272.116.272.118.271.119.27.121.269.123.269.124.268.126.267.128.266.129.265.131.264.133.264.134.263.136.262.138.261.139.26.141.259.143.258.144.257.146.257.147.256.149.255.151.254.152.253.154.252.155.251.157.25.159.249.16.248.162.247.163.246.165.245.166.244.168.243.169.242.171.24.173.239.174.238.176.237.177.236.178.235.18.234.181.233.183.231.184.23.186.229.187.228.189.227.19.226.192.224.193.223.194.222.2.221.2.219.2.218.2.217.2.216.2.214.2.213.205.212.207.211.208.209.209.208.211.207.212.205.213.2.215.2.216.2.217.2.218.2.22.2.221.2.222.194.223.193.224.191.226.19.227.189.228.187.229.186.23.184.232.183.233.181.234.18.235.178.236.177.237.175.238.174.239.172.241.171.242.169.243.168.244.166.245.165.246.163.247.162.248.16.249.158.25.157.251.155.252.154.253.152.254.151.255.149.256.147.257.146.258.144.258.142.259.141.26.139.261.138.262.136.263.134.264.133.265.131.265.129.266.128.267.126.268.124.269.123.269.121.27.119.271.117.272.116.272.114.273.112.274.111.274.109.275.107.276.105.277.1.277.1.278.1.278.1.279.1.28.095.28.093.281.091.281.09.282.088.283.086.283.084.284.082.284.081.285.079.285.077.286.075.286.074.287.072.287.07.288.068.288.066.288.064.289.063.289.061.29.059.29.057.29.055.291.054.291.052.291.05.292.048.292.046.292.044.293.043.293.041.293.039.293.037.294.035.294.033.294.031.294.03.294.028.295.026.295.024.295.022.3.02.3.018.3.017.3.015.3.013.3.011.3.009.3.007.3.005.3,0,.3,0,.3v.3l0,.3,0,.3-.006.3-.008.3-.009.3-.011.3-.013.3-.015.3-.017.3-.019.3-.021.3-.022.3-.024.295-.026.295-.028.295-.03.294-.032.294-.033.294-.035.294-.037.294-.039.293-.041.293-.043.293-.045.293-.046.292-.048.292-.05.292-.052.291-.054.291-.056.291-.057.29-.059.29-.061.29-.063.289-.065.289-.066.288-.068.288-.07.288-.072.287-.074.287-.075.286-.077.286-.079.285-.081.285-.083.284-.084.284-.086.283-.088.283-.09.282-.092.281-.093.281-.1.28-.1.28-.1.279-.1.278-.1.278-.1.277-.106.276-.107.276-.109.275-.111.274-.112.274-.114.273-.116.272-.118.272-.119.271-.121.27-.123.269-.124.269-.126.268-.128.267-.129.266-.131.265-.133.264-.134.264-.136.263-.138.262-.139.261-.141.26-.143.259-.144.258-.146.257-.148.257-.149.256-.151.255-.152.254-.154.253-.155.252-.157.251-.159.25-.16.249-.162.248-.163.247-.165.246-.166.245-.168.244-.169.243-.171.242-.173.24-.174.239-.176.238-.177.237-.178.236-.18.235Z"
                  transform="translate(-20.59 -272.21)" fill="#fff" stroke="#000" stroke-miterlimit="10"
                  stroke-width="1" />
              </g>
              <path id="Path_2-4" data-name="Path 2"
                d="M114.3,354.8l-.183.233-.184.231-.186.23-.187.229-.189.228-.19.227-.192.226-.193.224-.194.223-.2.222-.2.221-.2.219-.2.218-.2.217-.2.216-.2.214-.205.213-.207.212-.208.211-.209.209-.211.208-.212.207-.213.205-.215.2-.216.2-.217.2-.218.2-.22.2-.221.2-.222.2-.223.194-.224.193-.226.191-.227.19-.228.189-.229.187-.23.186-.232.184-.233.183-.234.181-.235.18-.236.178-.237.177-.238.175-.239.174-.241.172-.242.171-.243.169-.244.168-.245.166-.246.165-.247.163-.248.162-.249.16-.25.159-.251.157-.252.155-.253.154-.254.152-.255.151-.256.149-.257.147-.258.146-.258.144-.259.142-.26.141-.261.139-.262.138-.263.136-.264.134-.265.133-.265.131-.266.129-.267.128-.268.126-.269.124-.269.123-.27.121-.271.119-.272.117-.272.116-.273.114-.274.112-.274.111-.275.109-.276.107-.277.105-.277.1-.278.1-.278.1-.279.1-.28.1-.28.095-.281.093-.281.091-.282.09-.283.088-.283.086-.284.084-.284.082-.285.081-.285.079-.286.077-.286.075-.287.074-.287.072-.288.07-.288.068-.288.066-.289.064-.289.063-.29.061-.29.059-.29.057-.291.055-.291.054-.291.052-.292.05-.292.048-.292.046-.293.044-.293.043-.293.041-.293.039-.294.037-.294.035-.294.033-.294.031-.294.03-.295.028-.295.026-.295.024-.3.022-.3.02-.3.018-.3.017-.3.015-.3.013-.3.011-.3.009-.3.007-.3.005-.3,0-.3,0h-.3l-.3,0-.3,0-.3-.006-.3-.008-.3-.009-.3-.011-.3-.013-.3-.015-.3-.017-.3-.019-.3-.021-.3-.022-.295-.024-.295-.026-.295-.028-.294-.03L72,372.62l-.294-.033-.294-.035-.294-.037-.293-.039-.293-.041-.293-.043-.293-.045-.292-.046-.292-.048-.292-.05-.291-.052-.291-.054-.291-.056-.29-.057-.29-.059-.29-.061-.289-.063-.289-.065-.288-.066-.288-.068-.288-.07-.287-.072-.287-.074-.286-.075-.286-.077-.285-.079-.285-.081-.284-.083-.284-.084-.283-.086-.283-.088-.282-.09-.281-.092-.281-.093-.28-.1-.28-.1-.279-.1-.278-.1-.278-.1-.277-.1-.276-.106-.276-.107-.275-.109-.274-.111-.274-.112-.273-.114-.272-.116-.272-.118-.271-.119-.27-.121-.269-.123-.269-.124-.268-.126-.267-.128-.266-.129-.265-.131-.264-.133-.264-.134-.263-.136-.262-.138-.261-.139-.26-.141L54.353,367l-.258-.144-.257-.146-.257-.148-.256-.149-.255-.151-.254-.152-.253-.154-.252-.155-.251-.157-.25-.159-.249-.16-.248-.162L51.068,365l-.246-.165-.245-.166-.244-.168-.243-.169-.242-.171-.24-.173-.239-.174-.238-.176-.237-.177-.236-.178-.235-.18-.234-.181-.233-.183-.231-.184-.23-.186-.229-.187-.228-.189-.227-.19-.226-.192-.224-.193-.223-.194-.222-.2-.221-.2-.219-.2-.218-.2-.217-.2-.216-.2-.214-.2-.213-.205-.212-.207-.211-.208L43.766,359l-.208-.211-.207-.212-.205-.213-.2-.215-.2-.216-.2-.217-.2-.218-.2-.22-.2-.221-.2-.222-.194-.223-.193-.224-.191-.226-.19-.227-.189-.228-.187-.229-.186-.23-.184-.232-.183-.233-.181-.234-.18-.235-.178-.236-.177-.237-.175-.238-.174-.239-.172-.241-.171-.242-.169-.243-.168-.244-.166-.245-.165-.246-.163-.247-.162-.248-.16-.249-.158-.25-.157-.251-.155-.252-.154-.253-.152-.254-.151-.255-.149-.256-.147-.257-.146-.258-.144-.258-.142-.259-.141-.26-.139-.261-.138-.262-.136-.263-.134-.264-.133-.265-.131-.265-.129-.266-.128-.267-.126-.268-.124-.269-.123-.269-.121-.27-.119-.271-.117-.272-.116-.272-.114-.273-.112-.274-.111-.274-.109-.275-.107-.276-.105-.277-.1-.277-.1-.278-.1-.278-.1-.279-.1-.28-.095-.28-.093-.281-.091-.281-.09-.282-.088-.283-.086-.283-.084-.284-.082-.284-.081-.285-.079-.285-.077-.286-.075-.286-.074-.287-.072-.287-.07-.288-.068-.288-.066-.288-.064-.289-.063-.289-.061-.29-.059-.29-.057-.29-.055-.291-.054-.291-.052-.291-.05-.292-.048-.292-.046-.292-.044-.293-.043-.293-.041-.293-.039-.293-.037-.294-.035-.294-.033-.294-.031-.294-.03-.294-.028-.295-.026-.295-.024-.295-.022-.3-.02-.3-.018-.3-.017-.3-.015-.3-.013-.3-.011-.3-.009-.3-.007-.3-.005-.3,0-.3,0-.3v-.3l0-.3,0-.3.006-.3.008-.3.009-.3.011-.3.013-.3.015-.3.017-.3.019-.3.021-.3.022-.3.024-.295.026-.295.028-.295.03-.294.032-.294.033-.294.035-.294.037-.294.039-.293.041-.293.043-.293.045-.293.046-.292.048-.292.05-.292.052-.291.054-.291.056-.291.057-.29.059-.29.061-.29.063-.289.065-.289.066-.288.068-.288.07-.288.072-.287.074-.287.075-.286.077-.286.079-.285.081-.285L32,312.51l.084-.284.086-.283.088-.283.09-.282.092-.281.093-.281.1-.28.1-.28.1-.279.1-.278.1-.278.1-.277.106-.276.107-.276.109-.275.111-.274.112-.274.114-.273.116-.272.118-.272.119-.271.121-.27.123-.269.124-.269.126-.268.128-.267.129-.266.131-.265.133-.264.134-.264.136-.263.138-.262.139-.261.141-.26.143-.259.144-.258.146-.257.148-.257.149-.256.151-.255.152-.254.154-.253.155-.252.157-.251.159-.25.16-.249.162-.248.163-.247.165-.246.166-.245.168-.244.169-.243.171-.242.173-.24.174-.239.176-.238.177-.237.179-.236.18-.235.181-.234.183-.233.184-.231.186-.23.187-.229.189-.228.19-.227.192-.226.193-.224.194-.223.2-.222.2-.221.2-.219.2-.218.2-.217.2-.216.2-.214.205-.213.207-.212.208-.211.209-.209.211-.208.212-.207.213-.205.215-.2.216-.2.217-.2.218-.2.22-.2.221-.2.222-.2.223-.194.224-.193.226-.191.227-.19.228-.189.229-.187.23-.186.232-.184.233-.183.234-.181.235-.18.236-.178.237-.177.238-.175.239-.174.241-.172.242-.171.243-.169.244-.168.245-.166.246-.165.247-.163.248-.162.249-.16.25-.159.251-.157.252-.155.253-.154.254-.152.255-.151.256-.149.257-.147.258-.146.258-.144.259-.142.26-.141.261-.139.262-.138.263-.136.264-.134.265-.133.265-.131.266-.129.267-.128.268-.126.269-.124.269-.123.27-.121.271-.119.272-.117.272-.116.273-.114.274-.112.274-.111.275-.109.276-.107.277-.105.277-.1.278-.1.278-.1.279-.1.28-.1.28-.095.281-.093.281-.091.282-.09.283-.088.283-.086.284-.084.284-.082.285-.081.285-.079.286-.077.286-.075.287-.074.287-.072L66.2,280l.288-.068.288-.066.289-.064.289-.063.29-.061.29-.059.29-.057.291-.055.291-.054.291-.052.292-.05.292-.048.292-.046.293-.044.293-.043.293-.041.293-.039.294-.037.294-.035.294-.033.294-.031.294-.03.295-.028.295-.026.295-.024.3-.022.3-.02.3-.018.3-.017.3-.015.3-.013.3-.011.3-.009.3-.007.3-.005.3,0,.3,0h.3l.3,0,.3,0,.3.006.3.008.3.009.3.011.3.013.3.015.3.017.3.019.3.021.3.022.295.024.295.026.295.028.294.03.294.032.294.033.294.035.294.037.293.039.293.041.293.043.293.045.292.046.292.048.292.05.291.052.291.054.291.056.29.057.29.059.29.061.289.063.289.065.288.066.288.068.288.07.287.072.287.074.286.075.286.077.285.079.285.081.284.083.284.084.283.086.283.088.282.09.281.092.281.093.28.1.28.1.279.1.278.1.278.1.277.1.276.106.276.107.275.109.274.111.274.112.273.114.272.116.272.118.271.119.27.121.269.123.269.124.268.126.267.128.266.129.265.131.264.133.264.134.263.136.262.138.261.139.26.141.259.143.258.144.257.146.257.147.256.149.255.151.254.152.253.154.252.155.251.157.25.159.249.16.248.162.247.163.246.165.245.166.244.168.243.169.242.171.24.173.239.174.238.176.237.177.236.178.235.18.234.181.233.183.231.184.23.186.229.187.228.189.227.19.226.192.224.193.223.194.222.2.221.2.219.2.218.2.217.2.216.2.214.2.213.205.212.207.211.208.209.209.208.211.207.212.205.213.2.215.2.216.2.217.2.218.2.22.2.221.2.222.194.223.193.224.191.226.19.227.189.228.187.229.186.23.184.232.183.233.181.234.18.235.178.236.177.237.175.238.174.239.172.241.171.242.169.243.168.244.166.245.165.246.163.247.162.248.16.249.158.25.157.251.155.252.154.253.152.254.151.255.149.256.147.257.146.258.144.258.142.259.141.26.139.261.138.262.136.263.134.264.133.265.131.265.129.266.128.267.126.268.124.269.123.269.121.27.119.271.117.272.116.272.114.273.112.274.111.274.109.275.107.276.105.277.1.277.1.278.1.278.1.279.1.28.095.28.093.281.091.281.09.282.088.283.086.283.084.284.082.284.081.285.079.285.077.286.075.286.074.287.072.287.07.288.068.288.066.288.064.289.063.289.061.29.059.29.057.29.055.291.054.291.052.291.05.292.048.292.046.292.044.293.043.293.041.293.039.293.037.294.035.294.033.294.031.294.03.294.028.295.026.295.024.295.022.3.02.3.018.3.017.3.015.3.013.3.011.3.009.3.007.3.005.3,0,.3,0,.3v.3l0,.3,0,.3-.006.3-.008.3-.009.3-.011.3-.013.3-.015.3-.017.3-.019.3-.021.3-.022.3-.024.295-.026.295-.028.295-.03.294-.032.294-.033.294-.035.294-.037.294-.039.293-.041.293-.043.293-.045.293-.046.292-.048.292-.05.292-.052.291-.054.291-.056.291-.057.29-.059.29-.061.29-.063.289-.065.289-.066.288-.068.288-.07.288-.072.287-.074.287-.075.286-.077.286-.079.285-.081.285-.083.284-.084.284-.086.283-.088.283-.09.282-.092.281-.093.281-.1.28-.1.28-.1.279-.1.278-.1.278-.1.277-.106.276-.107.276-.109.275-.111.274-.112.274-.114.273-.116.272-.118.272-.119.271-.121.27-.123.269-.124.269-.126.268-.128.267-.129.266-.131.265-.133.264-.134.264-.136.263-.138.262-.139.261-.141.26-.143.259-.144.258-.146.257-.148.257-.149.256-.151.255-.152.254-.154.253-.155.252-.157.251-.159.25-.16.249-.162.248-.163.247-.165.246-.166.245-.168.244-.169.243-.171.242-.173.24-.174.239-.176.238-.177.237-.178.236-.18.235Z"
                transform="translate(231.214 75.268)" fill="#fff" />
              <g transform="matrix(1, 0, 0, 1, 251.8, 347.47)" filter="url(#Path_2-2)">
                <path id="Path_2-5" data-name="Path 2"
                  d="M114.3,354.8l-.183.233-.184.231-.186.23-.187.229-.189.228-.19.227-.192.226-.193.224-.194.223-.2.222-.2.221-.2.219-.2.218-.2.217-.2.216-.2.214-.205.213-.207.212-.208.211-.209.209-.211.208-.212.207-.213.205-.215.2-.216.2-.217.2-.218.2-.22.2-.221.2-.222.2-.223.194-.224.193-.226.191-.227.19-.228.189-.229.187-.23.186-.232.184-.233.183-.234.181-.235.18-.236.178-.237.177-.238.175-.239.174-.241.172-.242.171-.243.169-.244.168-.245.166-.246.165-.247.163-.248.162-.249.16-.25.159-.251.157-.252.155-.253.154-.254.152-.255.151-.256.149-.257.147-.258.146-.258.144-.259.142-.26.141-.261.139-.262.138-.263.136-.264.134-.265.133-.265.131-.266.129-.267.128-.268.126-.269.124-.269.123-.27.121-.271.119-.272.117-.272.116-.273.114-.274.112-.274.111-.275.109-.276.107-.277.105-.277.1-.278.1-.278.1-.279.1-.28.1-.28.095-.281.093-.281.091-.282.09-.283.088-.283.086-.284.084-.284.082-.285.081-.285.079-.286.077-.286.075-.287.074-.287.072-.288.07-.288.068-.288.066-.289.064-.289.063-.29.061-.29.059-.29.057-.291.055-.291.054-.291.052-.292.05-.292.048-.292.046-.293.044-.293.043-.293.041-.293.039-.294.037-.294.035-.294.033-.294.031-.294.03-.295.028-.295.026-.295.024-.3.022-.3.02-.3.018-.3.017-.3.015-.3.013-.3.011-.3.009-.3.007-.3.005-.3,0-.3,0h-.3l-.3,0-.3,0-.3-.006-.3-.008-.3-.009-.3-.011-.3-.013-.3-.015-.3-.017-.3-.019-.3-.021-.3-.022-.295-.024-.295-.026-.295-.028-.294-.03L72,372.62l-.294-.033-.294-.035-.294-.037-.293-.039-.293-.041-.293-.043-.293-.045-.292-.046-.292-.048-.292-.05-.291-.052-.291-.054-.291-.056-.29-.057-.29-.059-.29-.061-.289-.063-.289-.065-.288-.066-.288-.068-.288-.07-.287-.072-.287-.074-.286-.075-.286-.077-.285-.079-.285-.081-.284-.083-.284-.084-.283-.086-.283-.088-.282-.09-.281-.092-.281-.093-.28-.1-.28-.1-.279-.1-.278-.1-.278-.1-.277-.1-.276-.106-.276-.107-.275-.109-.274-.111-.274-.112-.273-.114-.272-.116-.272-.118-.271-.119-.27-.121-.269-.123-.269-.124-.268-.126-.267-.128-.266-.129-.265-.131-.264-.133-.264-.134-.263-.136-.262-.138-.261-.139-.26-.141L54.353,367l-.258-.144-.257-.146-.257-.148-.256-.149-.255-.151-.254-.152-.253-.154-.252-.155-.251-.157-.25-.159-.249-.16-.248-.162L51.068,365l-.246-.165-.245-.166-.244-.168-.243-.169-.242-.171-.24-.173-.239-.174-.238-.176-.237-.177-.236-.178-.235-.18-.234-.181-.233-.183-.231-.184-.23-.186-.229-.187-.228-.189-.227-.19-.226-.192-.224-.193-.223-.194-.222-.2-.221-.2-.219-.2-.218-.2-.217-.2-.216-.2-.214-.2-.213-.205-.212-.207-.211-.208L43.766,359l-.208-.211-.207-.212-.205-.213-.2-.215-.2-.216-.2-.217-.2-.218-.2-.22-.2-.221-.2-.222-.194-.223-.193-.224-.191-.226-.19-.227-.189-.228-.187-.229-.186-.23-.184-.232-.183-.233-.181-.234-.18-.235-.178-.236-.177-.237-.175-.238-.174-.239-.172-.241-.171-.242-.169-.243-.168-.244-.166-.245-.165-.246-.163-.247-.162-.248-.16-.249-.158-.25-.157-.251-.155-.252-.154-.253-.152-.254-.151-.255-.149-.256-.147-.257-.146-.258-.144-.258-.142-.259-.141-.26-.139-.261-.138-.262-.136-.263-.134-.264-.133-.265-.131-.265-.129-.266-.128-.267-.126-.268-.124-.269-.123-.269-.121-.27-.119-.271-.117-.272-.116-.272-.114-.273-.112-.274-.111-.274-.109-.275-.107-.276-.105-.277-.1-.277-.1-.278-.1-.278-.1-.279-.1-.28-.095-.28-.093-.281-.091-.281-.09-.282-.088-.283-.086-.283-.084-.284-.082-.284-.081-.285-.079-.285-.077-.286-.075-.286-.074-.287-.072-.287-.07-.288-.068-.288-.066-.288-.064-.289-.063-.289-.061-.29-.059-.29-.057-.29-.055-.291-.054-.291-.052-.291-.05-.292-.048-.292-.046-.292-.044-.293-.043-.293-.041-.293-.039-.293-.037-.294-.035-.294-.033-.294-.031-.294-.03-.294-.028-.295-.026-.295-.024-.295-.022-.3-.02-.3-.018-.3-.017-.3-.015-.3-.013-.3-.011-.3-.009-.3-.007-.3-.005-.3,0-.3,0-.3v-.3l0-.3,0-.3.006-.3.008-.3.009-.3.011-.3.013-.3.015-.3.017-.3.019-.3.021-.3.022-.3.024-.295.026-.295.028-.295.03-.294.032-.294.033-.294.035-.294.037-.294.039-.293.041-.293.043-.293.045-.293.046-.292.048-.292.05-.292.052-.291.054-.291.056-.291.057-.29.059-.29.061-.29.063-.289.065-.289.066-.288.068-.288.07-.288.072-.287.074-.287.075-.286.077-.286.079-.285.081-.285L32,312.51l.084-.284.086-.283.088-.283.09-.282.092-.281.093-.281.1-.28.1-.28.1-.279.1-.278.1-.278.1-.277.106-.276.107-.276.109-.275.111-.274.112-.274.114-.273.116-.272.118-.272.119-.271.121-.27.123-.269.124-.269.126-.268.128-.267.129-.266.131-.265.133-.264.134-.264.136-.263.138-.262.139-.261.141-.26.143-.259.144-.258.146-.257.148-.257.149-.256.151-.255.152-.254.154-.253.155-.252.157-.251.159-.25.16-.249.162-.248.163-.247.165-.246.166-.245.168-.244.169-.243.171-.242.173-.24.174-.239.176-.238.177-.237.179-.236.18-.235.181-.234.183-.233.184-.231.186-.23.187-.229.189-.228.19-.227.192-.226.193-.224.194-.223.2-.222.2-.221.2-.219.2-.218.2-.217.2-.216.2-.214.205-.213.207-.212.208-.211.209-.209.211-.208.212-.207.213-.205.215-.2.216-.2.217-.2.218-.2.22-.2.221-.2.222-.2.223-.194.224-.193.226-.191.227-.19.228-.189.229-.187.23-.186.232-.184.233-.183.234-.181.235-.18.236-.178.237-.177.238-.175.239-.174.241-.172.242-.171.243-.169.244-.168.245-.166.246-.165.247-.163.248-.162.249-.16.25-.159.251-.157.252-.155.253-.154.254-.152.255-.151.256-.149.257-.147.258-.146.258-.144.259-.142.26-.141.261-.139.262-.138.263-.136.264-.134.265-.133.265-.131.266-.129.267-.128.268-.126.269-.124.269-.123.27-.121.271-.119.272-.117.272-.116.273-.114.274-.112.274-.111.275-.109.276-.107.277-.105.277-.1.278-.1.278-.1.279-.1.28-.1.28-.095.281-.093.281-.091.282-.09.283-.088.283-.086.284-.084.284-.082.285-.081.285-.079.286-.077.286-.075.287-.074.287-.072L66.2,280l.288-.068.288-.066.289-.064.289-.063.29-.061.29-.059.29-.057.291-.055.291-.054.291-.052.292-.05.292-.048.292-.046.293-.044.293-.043.293-.041.293-.039.294-.037.294-.035.294-.033.294-.031.294-.03.295-.028.295-.026.295-.024.3-.022.3-.02.3-.018.3-.017.3-.015.3-.013.3-.011.3-.009.3-.007.3-.005.3,0,.3,0h.3l.3,0,.3,0,.3.006.3.008.3.009.3.011.3.013.3.015.3.017.3.019.3.021.3.022.295.024.295.026.295.028.294.03.294.032.294.033.294.035.294.037.293.039.293.041.293.043.293.045.292.046.292.048.292.05.291.052.291.054.291.056.29.057.29.059.29.061.289.063.289.065.288.066.288.068.288.07.287.072.287.074.286.075.286.077.285.079.285.081.284.083.284.084.283.086.283.088.282.09.281.092.281.093.28.1.28.1.279.1.278.1.278.1.277.1.276.106.276.107.275.109.274.111.274.112.273.114.272.116.272.118.271.119.27.121.269.123.269.124.268.126.267.128.266.129.265.131.264.133.264.134.263.136.262.138.261.139.26.141.259.143.258.144.257.146.257.147.256.149.255.151.254.152.253.154.252.155.251.157.25.159.249.16.248.162.247.163.246.165.245.166.244.168.243.169.242.171.24.173.239.174.238.176.237.177.236.178.235.18.234.181.233.183.231.184.23.186.229.187.228.189.227.19.226.192.224.193.223.194.222.2.221.2.219.2.218.2.217.2.216.2.214.2.213.205.212.207.211.208.209.209.208.211.207.212.205.213.2.215.2.216.2.217.2.218.2.22.2.221.2.222.194.223.193.224.191.226.19.227.189.228.187.229.186.23.184.232.183.233.181.234.18.235.178.236.177.237.175.238.174.239.172.241.171.242.169.243.168.244.166.245.165.246.163.247.162.248.16.249.158.25.157.251.155.252.154.253.152.254.151.255.149.256.147.257.146.258.144.258.142.259.141.26.139.261.138.262.136.263.134.264.133.265.131.265.129.266.128.267.126.268.124.269.123.269.121.27.119.271.117.272.116.272.114.273.112.274.111.274.109.275.107.276.105.277.1.277.1.278.1.278.1.279.1.28.095.28.093.281.091.281.09.282.088.283.086.283.084.284.082.284.081.285.079.285.077.286.075.286.074.287.072.287.07.288.068.288.066.288.064.289.063.289.061.29.059.29.057.29.055.291.054.291.052.291.05.292.048.292.046.292.044.293.043.293.041.293.039.293.037.294.035.294.033.294.031.294.03.294.028.295.026.295.024.295.022.3.02.3.018.3.017.3.015.3.013.3.011.3.009.3.007.3.005.3,0,.3,0,.3v.3l0,.3,0,.3-.006.3-.008.3-.009.3-.011.3-.013.3-.015.3-.017.3-.019.3-.021.3-.022.3-.024.295-.026.295-.028.295-.03.294-.032.294-.033.294-.035.294-.037.294-.039.293-.041.293-.043.293-.045.293-.046.292-.048.292-.05.292-.052.291-.054.291-.056.291-.057.29-.059.29-.061.29-.063.289-.065.289-.066.288-.068.288-.07.288-.072.287-.074.287-.075.286-.077.286-.079.285-.081.285-.083.284-.084.284-.086.283-.088.283-.09.282-.092.281-.093.281-.1.28-.1.28-.1.279-.1.278-.1.278-.1.277-.106.276-.107.276-.109.275-.111.274-.112.274-.114.273-.116.272-.118.272-.119.271-.121.27-.123.269-.124.269-.126.268-.128.267-.129.266-.131.265-.133.264-.134.264-.136.263-.138.262-.139.261-.141.26-.143.259-.144.258-.146.257-.148.257-.149.256-.151.255-.152.254-.154.253-.155.252-.157.251-.159.25-.16.249-.162.248-.163.247-.165.246-.166.245-.168.244-.169.243-.171.242-.173.24-.174.239-.176.238-.177.237-.178.236-.18.235Z"
                  transform="translate(-20.59 -272.21)" fill="#fff" />
              </g>
              <path id="Path_2-6" data-name="Path 2"
                d="M114.3,354.8l-.183.233-.184.231-.186.23-.187.229-.189.228-.19.227-.192.226-.193.224-.194.223-.2.222-.2.221-.2.219-.2.218-.2.217-.2.216-.2.214-.205.213-.207.212-.208.211-.209.209-.211.208-.212.207-.213.205-.215.2-.216.2-.217.2-.218.2-.22.2-.221.2-.222.2-.223.194-.224.193-.226.191-.227.19-.228.189-.229.187-.23.186-.232.184-.233.183-.234.181-.235.18-.236.178-.237.177-.238.175-.239.174-.241.172-.242.171-.243.169-.244.168-.245.166-.246.165-.247.163-.248.162-.249.16-.25.159-.251.157-.252.155-.253.154-.254.152-.255.151-.256.149-.257.147-.258.146-.258.144-.259.142-.26.141-.261.139-.262.138-.263.136-.264.134-.265.133-.265.131-.266.129-.267.128-.268.126-.269.124-.269.123-.27.121-.271.119-.272.117-.272.116-.273.114-.274.112-.274.111-.275.109-.276.107-.277.105-.277.1-.278.1-.278.1-.279.1-.28.1-.28.095-.281.093-.281.091-.282.09-.283.088-.283.086-.284.084-.284.082-.285.081-.285.079-.286.077-.286.075-.287.074-.287.072-.288.07-.288.068-.288.066-.289.064-.289.063-.29.061-.29.059-.29.057-.291.055-.291.054-.291.052-.292.05-.292.048-.292.046-.293.044-.293.043-.293.041-.293.039-.294.037-.294.035-.294.033-.294.031-.294.03-.295.028-.295.026-.295.024-.3.022-.3.02-.3.018-.3.017-.3.015-.3.013-.3.011-.3.009-.3.007-.3.005-.3,0-.3,0h-.3l-.3,0-.3,0-.3-.006-.3-.008-.3-.009-.3-.011-.3-.013-.3-.015-.3-.017-.3-.019-.3-.021-.3-.022-.295-.024-.295-.026-.295-.028-.294-.03L72,372.62l-.294-.033-.294-.035-.294-.037-.293-.039-.293-.041-.293-.043-.293-.045-.292-.046-.292-.048-.292-.05-.291-.052-.291-.054-.291-.056-.29-.057-.29-.059-.29-.061-.289-.063-.289-.065-.288-.066-.288-.068-.288-.07-.287-.072-.287-.074-.286-.075-.286-.077-.285-.079-.285-.081-.284-.083-.284-.084-.283-.086-.283-.088-.282-.09-.281-.092-.281-.093-.28-.1-.28-.1-.279-.1-.278-.1-.278-.1-.277-.1-.276-.106-.276-.107-.275-.109-.274-.111-.274-.112-.273-.114-.272-.116-.272-.118-.271-.119-.27-.121-.269-.123-.269-.124-.268-.126-.267-.128-.266-.129-.265-.131-.264-.133-.264-.134-.263-.136-.262-.138-.261-.139-.26-.141L54.353,367l-.258-.144-.257-.146-.257-.148-.256-.149-.255-.151-.254-.152-.253-.154-.252-.155-.251-.157-.25-.159-.249-.16-.248-.162L51.068,365l-.246-.165-.245-.166-.244-.168-.243-.169-.242-.171-.24-.173-.239-.174-.238-.176-.237-.177-.236-.178-.235-.18-.234-.181-.233-.183-.231-.184-.23-.186-.229-.187-.228-.189-.227-.19-.226-.192-.224-.193-.223-.194-.222-.2-.221-.2-.219-.2-.218-.2-.217-.2-.216-.2-.214-.2-.213-.205-.212-.207-.211-.208L43.766,359l-.208-.211-.207-.212-.205-.213-.2-.215-.2-.216-.2-.217-.2-.218-.2-.22-.2-.221-.2-.222-.194-.223-.193-.224-.191-.226-.19-.227-.189-.228-.187-.229-.186-.23-.184-.232-.183-.233-.181-.234-.18-.235-.178-.236-.177-.237-.175-.238-.174-.239-.172-.241-.171-.242-.169-.243-.168-.244-.166-.245-.165-.246-.163-.247-.162-.248-.16-.249-.158-.25-.157-.251-.155-.252-.154-.253-.152-.254-.151-.255-.149-.256-.147-.257-.146-.258-.144-.258-.142-.259-.141-.26-.139-.261-.138-.262-.136-.263-.134-.264-.133-.265-.131-.265-.129-.266-.128-.267-.126-.268-.124-.269-.123-.269-.121-.27-.119-.271-.117-.272-.116-.272-.114-.273-.112-.274-.111-.274-.109-.275-.107-.276-.105-.277-.1-.277-.1-.278-.1-.278-.1-.279-.1-.28-.095-.28-.093-.281-.091-.281-.09-.282-.088-.283-.086-.283-.084-.284-.082-.284-.081-.285-.079-.285-.077-.286-.075-.286-.074-.287-.072-.287-.07-.288-.068-.288-.066-.288-.064-.289-.063-.289-.061-.29-.059-.29-.057-.29-.055-.291-.054-.291-.052-.291-.05-.292-.048-.292-.046-.292-.044-.293-.043-.293-.041-.293-.039-.293-.037-.294-.035-.294-.033-.294-.031-.294-.03-.294-.028-.295-.026-.295-.024-.295-.022-.3-.02-.3-.018-.3-.017-.3-.015-.3-.013-.3-.011-.3-.009-.3-.007-.3-.005-.3,0-.3,0-.3v-.3l0-.3,0-.3.006-.3.008-.3.009-.3.011-.3.013-.3.015-.3.017-.3.019-.3.021-.3.022-.3.024-.295.026-.295.028-.295.03-.294.032-.294.033-.294.035-.294.037-.294.039-.293.041-.293.043-.293.045-.293.046-.292.048-.292.05-.292.052-.291.054-.291.056-.291.057-.29.059-.29.061-.29.063-.289.065-.289.066-.288.068-.288.07-.288.072-.287.074-.287.075-.286.077-.286.079-.285.081-.285L32,312.51l.084-.284.086-.283.088-.283.09-.282.092-.281.093-.281.1-.28.1-.28.1-.279.1-.278.1-.278.1-.277.106-.276.107-.276.109-.275.111-.274.112-.274.114-.273.116-.272.118-.272.119-.271.121-.27.123-.269.124-.269.126-.268.128-.267.129-.266.131-.265.133-.264.134-.264.136-.263.138-.262.139-.261.141-.26.143-.259.144-.258.146-.257.148-.257.149-.256.151-.255.152-.254.154-.253.155-.252.157-.251.159-.25.16-.249.162-.248.163-.247.165-.246.166-.245.168-.244.169-.243.171-.242.173-.24.174-.239.176-.238.177-.237.179-.236.18-.235.181-.234.183-.233.184-.231.186-.23.187-.229.189-.228.19-.227.192-.226.193-.224.194-.223.2-.222.2-.221.2-.219.2-.218.2-.217.2-.216.2-.214.205-.213.207-.212.208-.211.209-.209.211-.208.212-.207.213-.205.215-.2.216-.2.217-.2.218-.2.22-.2.221-.2.222-.2.223-.194.224-.193.226-.191.227-.19.228-.189.229-.187.23-.186.232-.184.233-.183.234-.181.235-.18.236-.178.237-.177.238-.175.239-.174.241-.172.242-.171.243-.169.244-.168.245-.166.246-.165.247-.163.248-.162.249-.16.25-.159.251-.157.252-.155.253-.154.254-.152.255-.151.256-.149.257-.147.258-.146.258-.144.259-.142.26-.141.261-.139.262-.138.263-.136.264-.134.265-.133.265-.131.266-.129.267-.128.268-.126.269-.124.269-.123.27-.121.271-.119.272-.117.272-.116.273-.114.274-.112.274-.111.275-.109.276-.107.277-.105.277-.1.278-.1.278-.1.279-.1.28-.1.28-.095.281-.093.281-.091.282-.09.283-.088.283-.086.284-.084.284-.082.285-.081.285-.079.286-.077.286-.075.287-.074.287-.072L66.2,280l.288-.068.288-.066.289-.064.289-.063.29-.061.29-.059.29-.057.291-.055.291-.054.291-.052.292-.05.292-.048.292-.046.293-.044.293-.043.293-.041.293-.039.294-.037.294-.035.294-.033.294-.031.294-.03.295-.028.295-.026.295-.024.3-.022.3-.02.3-.018.3-.017.3-.015.3-.013.3-.011.3-.009.3-.007.3-.005.3,0,.3,0h.3l.3,0,.3,0,.3.006.3.008.3.009.3.011.3.013.3.015.3.017.3.019.3.021.3.022.295.024.295.026.295.028.294.03.294.032.294.033.294.035.294.037.293.039.293.041.293.043.293.045.292.046.292.048.292.05.291.052.291.054.291.056.29.057.29.059.29.061.289.063.289.065.288.066.288.068.288.07.287.072.287.074.286.075.286.077.285.079.285.081.284.083.284.084.283.086.283.088.282.09.281.092.281.093.28.1.28.1.279.1.278.1.278.1.277.1.276.106.276.107.275.109.274.111.274.112.273.114.272.116.272.118.271.119.27.121.269.123.269.124.268.126.267.128.266.129.265.131.264.133.264.134.263.136.262.138.261.139.26.141.259.143.258.144.257.146.257.147.256.149.255.151.254.152.253.154.252.155.251.157.25.159.249.16.248.162.247.163.246.165.245.166.244.168.243.169.242.171.24.173.239.174.238.176.237.177.236.178.235.18.234.181.233.183.231.184.23.186.229.187.228.189.227.19.226.192.224.193.223.194.222.2.221.2.219.2.218.2.217.2.216.2.214.2.213.205.212.207.211.208.209.209.208.211.207.212.205.213.2.215.2.216.2.217.2.218.2.22.2.221.2.222.194.223.193.224.191.226.19.227.189.228.187.229.186.23.184.232.183.233.181.234.18.235.178.236.177.237.175.238.174.239.172.241.171.242.169.243.168.244.166.245.165.246.163.247.162.248.16.249.158.25.157.251.155.252.154.253.152.254.151.255.149.256.147.257.146.258.144.258.142.259.141.26.139.261.138.262.136.263.134.264.133.265.131.265.129.266.128.267.126.268.124.269.123.269.121.27.119.271.117.272.116.272.114.273.112.274.111.274.109.275.107.276.105.277.1.277.1.278.1.278.1.279.1.28.095.28.093.281.091.281.09.282.088.283.086.283.084.284.082.284.081.285.079.285.077.286.075.286.074.287.072.287.07.288.068.288.066.288.064.289.063.289.061.29.059.29.057.29.055.291.054.291.052.291.05.292.048.292.046.292.044.293.043.293.041.293.039.293.037.294.035.294.033.294.031.294.03.294.028.295.026.295.024.295.022.3.02.3.018.3.017.3.015.3.013.3.011.3.009.3.007.3.005.3,0,.3,0,.3v.3l0,.3,0,.3-.006.3-.008.3-.009.3-.011.3-.013.3-.015.3-.017.3-.019.3-.021.3-.022.3-.024.295-.026.295-.028.295-.03.294-.032.294-.033.294-.035.294-.037.294-.039.293-.041.293-.043.293-.045.293-.046.292-.048.292-.05.292-.052.291-.054.291-.056.291-.057.29-.059.29-.061.29-.063.289-.065.289-.066.288-.068.288-.07.288-.072.287-.074.287-.075.286-.077.286-.079.285-.081.285-.083.284-.084.284-.086.283-.088.283-.09.282-.092.281-.093.281-.1.28-.1.28-.1.279-.1.278-.1.278-.1.277-.106.276-.107.276-.109.275-.111.274-.112.274-.114.273-.116.272-.118.272-.119.271-.121.27-.123.269-.124.269-.126.268-.128.267-.129.266-.131.265-.133.264-.134.264-.136.263-.138.262-.139.261-.141.26-.143.259-.144.258-.146.257-.148.257-.149.256-.151.255-.152.254-.154.253-.155.252-.157.251-.159.25-.16.249-.162.248-.163.247-.165.246-.166.245-.168.244-.169.243-.171.242-.173.24-.174.239-.176.238-.177.237-.178.236-.18.235Z"
                transform="translate(231.214 75.268)" fill="none" stroke="#000" stroke-miterlimit="10"
                stroke-width="1" />
            </g>
          </g>
          <g id="Group_12" data-name="Group 12" transform="translate(233.953 202.09)">
            <rect id="Rectangle_91" data-name="Rectangle 91" width="17.886" height="17.886"
              transform="translate(44.636 169.595)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_92" data-name="Rectangle 92" width="17.572" height="18.304"
              transform="translate(65.503 169.595)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_93" data-name="Rectangle 93" width="17.886" height="17.886"
              transform="translate(86.37 169.595)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_94" data-name="Rectangle 94" width="17.886" height="17.886"
              transform="translate(44.636 190.462)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_95" data-name="Rectangle 95" width="17.886" height="17.886"
              transform="translate(65.503 190.462)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_96" data-name="Rectangle 96" width="17.886" height="17.886"
              transform="translate(86.37 190.462)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_97" data-name="Rectangle 97" width="17.886" height="17.886"
              transform="translate(44.636 211.329)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_98" data-name="Rectangle 98" width="17.886" height="17.886"
              transform="translate(65.503 211.329)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
            <rect id="Rectangle_99" data-name="Rectangle 99" width="17.886" height="17.886"
              transform="translate(86.37 211.329)" stroke="#000" stroke-miterlimit="10" stroke-width="1" />
          </g>
        </g>
        <text id="SELECT" transform="translate(782 153)" fill="#fff" stroke="#fff" stroke-width="0.5" font-size="20"
          font-family="Helvetica">
          <tspan x="0" y="15">SELECT</tspan>
        </text>
      </g>
    </svg>
  </section>
    )
}
export default CubeSelect;