"use client";

import { Input, Container, IconButton, Flex, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import Card from "./card";

export default function Search() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState<string>("");

    // 検索ボタンのクリックイベントハンドラー
    const handleClick = async () => {
        if (!searchValue) return;

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=82c7a7c15877341298a3b9d327099dba&units=metric`
            );
            setWeatherData(response.data); // 取得したデータをstateに保存
            setError(""); // エラーメッセージをクリア
        } catch (err: any) {
            console.error("API call failed:", err); // エラーログをコンソールに出力
            setWeatherData(null);
            setError("City not found or an error occurred.");
        }
    };

    return (
        <Container padding="10px" width="100vw">
            <Flex direction="row" mb="4">
                <Input
                    placeholder="Enter Your City"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={handleClick}
                />
            </Flex>

            {error && <Text color="red.500">{error}</Text>}
            {weatherData ? (
                <Card data={weatherData} /> // データが存在する場合にCardを表示
            ) : (
                <Text>No data available</Text>
            )}
        </Container>
    );
}
