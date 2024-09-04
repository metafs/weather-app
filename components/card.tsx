// import {
//     Flex,
//     Text,
//     Image,
//     Box,
//     SimpleGrid,
//     ListItem,
//     UnorderedList,
// } from "@chakra-ui/react";

// interface CardProps {
//     data: any;
// }

// export default function Card({ data }: CardProps) {
//     if (!data) return null;

//     const weatherItems = data.weather;
//     const cityName = data.name;
//     const cityMain = data.main;
//     const weatherForecast = data.main.feels_like;
//     const weatherIcon = weatherItems.map((itm: any) => itm.icon).join("");
//     const url = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
//     const dT = data.dt;
//     const time = data.timezone;

//     // 時間情報の計算
//     const localTime = new Date(dT * 1000 + time * 1000);
//     const cityMonth = localTime.getMonth();
//     const cityTime = localTime.getDay();
//     const minutes = localTime.getMinutes();
//     const hours = localTime.getHours();
//     const cityDate = localTime.getDate();
//     const cityMinutes = minutes < 10 ? `0${minutes}` : minutes;
//     const cityHours = hours < 10 ? `0${hours}` : hours;
//     const timeFormat = hours >= 12 ? "PM" : "AM";
//     const mainTime = `${cityHours}:${cityMinutes} ${timeFormat}`;

//     // 曜日と月の情報
//     const dayArray = [
//         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//     ];
//     const day = dayArray[cityTime];
//     const monthArray = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     const month = monthArray[cityMonth];

//     let dateSuffix;
//     switch (cityDate) {
//         case 1:
//         case 21:
//         case 31:
//             dateSuffix = "st";
//             break;
//         case 2:
//         case 22:
//             dateSuffix = "nd";
//             break;
//         case 3:
//         case 23:
//             dateSuffix = "rd";
//             break;
//         default:
//             dateSuffix = "th";
//     }
//     const fullDate = `${month} ${cityDate}${dateSuffix}, ${day}`;
//     const unicode = "\u00b0";

//     const weatherArray = [fullDate, cityName, mainTime];
//     let tempName: any = [];
//     let tempValue: any = [];

//     Object.keys(cityMain)
//         .filter((val, index) => index !== 1)
//         .forEach((key) => {
//             tempName.push(key);
//         });
//     Object.values(cityMain)
//         .filter((val, index) => index !== 1)
//         .forEach((val) => {
//             tempValue.push(val);
//         });

//     let mainTemp = tempName.map((val: any, index: any) => `${val}: ${tempValue[index]}`);

//     return (
//         // <SimpleGrid columns={4} minChildWidth="500px" placeItems="center" spacing={16}>
//         //     {/* <Flex wrap="wrap" justifyContent="center" gap="4"> */}
//         <Flex direction="row" wrap="wrap" gap="4" justify="center">
//             <Box
//                 m="10px"
//                 h="500px"
//                 w="400px"
//                 mt="40px"
//                 bgImage="url(./img/cloudy.jpg)"
//                 bgSize="cover"
//                 bgPosition="bottom"
//                 borderRadius="2xl"
//                 shadow="dark-lg"
//             >
//                 <UnorderedList>
//                     {weatherArray.map((element, index) => (
//                         <ListItem
//                             color="white"
//                             display="flex"
//                             justifyContent="center"
//                             mt="20px"
//                             key={index}
//                         >
//                             {element}
//                         </ListItem>
//                     ))}
//                 </UnorderedList>
//                 <Image
//                     src={url}
//                     alt="weather-icon"
//                     width={100}
//                     height={100}
//                     ml="155"
//                     p="0"
//                 />
//                 <Text
//                     color="white"
//                     display="flex"
//                     justifyContent="center"
//                     mt="5px"
//                     fontSize="20px"
//                 >
//                     {weatherForecast}
//                     {unicode}
//                 </Text>
//                 <Text
//                     color="white"
//                     display="flex"
//                     justifyContent="center"
//                     mt="200"
//                 >
//                     Current Weather
//                 </Text>
//             </Box>

//             <Box
//                 m="10px"
//                 h="500px"
//                 w="400px"
//                 mt="40px"
//                 bgImage="url(./img/sunshine.jpg)"
//                 bgPosition="center"
//                 borderRadius="2xl"
//                 shadow="dark-lg"
//             >
//                 <Flex wrap="wrap" gap="2" justifyContent="space-around">
//                     {mainTemp.map((val: any, index: any) => (
//                         <Box
//                             color="white"
//                             display="flex"
//                             justifyContent="center"
//                             alignItems="center"
//                             p="5"
//                             w="150px"
//                             key={index}
//                         >
//                             {val}
//                         </Box>
//                     ))}
//                 </Flex>
//             </Box>
//             {/* </Flex> */}
//             {/* </SimpleGrid> */}
//         </Flex>
//     );
// }



import {
    Flex,
    Text,
    Image,
    Box,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react";

interface CardProps {
    data: any;
}

export default function Card({ data }: CardProps) {
    if (!data) return null; // データが存在しない場合は何も表示しない

    const weatherItems = data.weather;
    const cityName = data.name;
    const cityMain = data.main;
    const weatherForecast = data.main.feels_like;
    const weatherIcon = weatherItems.map((itm: any) => itm.icon).join("");
    const url = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const dT = data.dt;
    const time = data.timezone;

    // 時間情報の計算
    const localTime = new Date(dT * 1000 + time * 1000);
    const cityMonth = localTime.getMonth();
    const cityTime = localTime.getDay();
    const minutes = localTime.getMinutes();
    const hours = localTime.getHours();
    const cityDate = localTime.getDate();
    const cityMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const cityHours = hours < 10 ? `0${hours}` : hours;
    const timeFormat = hours >= 12 ? "PM" : "AM";
    const mainTime = `${cityHours}:${cityMinutes} ${timeFormat}`;

    // 曜日と月の情報
    const dayArray = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const day = dayArray[cityTime];
    const monthArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthArray[cityMonth];

    let dateSuffix;
    switch (cityDate) {
        case 1:
        case 21:
        case 31:
            dateSuffix = "st";
            break;
        case 2:
        case 22:
            dateSuffix = "nd";
            break;
        case 3:
        case 23:
            dateSuffix = "rd";
            break;
        default:
            dateSuffix = "th";
    }
    const fullDate = `${month} ${cityDate}${dateSuffix}, ${day}`;
    const unicode = "\u00b0";

    // 表示用のデータ構造
    const weatherArray = [fullDate, cityName, mainTime];
    let tempName: any = [];
    let tempValue: any = [];

    Object.keys(cityMain)
        .filter((val, index) => index !== 1)
        .forEach((key) => {
            tempName.push(key);
        });
    Object.values(cityMain)
        .filter((val, index) => index !== 1)
        .forEach((val) => {
            tempValue.push(val);
        });

    let mainTemp = tempName.map((val: any, index: any) => `${val}: ${tempValue[index]}`);

    return (
        <Flex direction="row" wrap="wrap" gap="4" justify="center" align="start">
            <Box
                m="10px"
                h="500px"
                w="400px"
                bgImage="url(./img/cloudy.jpg)"
                bgSize="cover"
                bgPosition="center"
                borderRadius="2xl"
                shadow="dark-lg"
            >
                <UnorderedList>
                    {weatherArray.map((element, index) => (
                        <ListItem
                            color="white"
                            display="flex"
                            justifyContent="center"
                            mt="20px"
                            key={index}
                        >
                            {element}
                        </ListItem>
                    ))}
                </UnorderedList>
                <Image
                    src={url}
                    alt="weather-icon"
                    width={100}
                    height={100}
                    ml="auto"
                    mr="auto"
                    display="block"
                />
                <Text
                    color="white"
                    display="flex"
                    justifyContent="center"
                    mt="5px"
                    fontSize="20px"
                >
                    {weatherForecast}
                    {unicode}
                </Text>
                <Text
                    color="white"
                    display="flex"
                    justifyContent="center"
                    mt="200px"
                >
                    Current Weather
                </Text>
            </Box>

            <Box
                m="10px"
                h="500px"
                w="400px"
                bgImage="url(./img/sunshine.jpg)"
                bgSize="cover"
                bgPosition="center"
                borderRadius="2xl"
                shadow="dark-lg"
            >
                <Flex wrap="wrap" gap="2" justifyContent="space-around">
                    {mainTemp.map((val: any, index: any) => (
                        <Box
                            color="white"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            p="5"
                            w="150px"
                            key={index}
                        >
                            {val}
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
}
