import Head from "next/head";
import {Box} from "@mui/material";
import React from "react";

const Privacy = () => {
    return (
        <>
            <Head>
                <title>nameSite — Политика конфиденциальности</title>
            </Head>
            <Box sx={{
                marginBottom: 10,
                marginTop: 10,
                boxShadow: "0 0 15px rgb(0 0 0 / 20%)",
                padding: "5px 20px 20px",
                borderRadius: "6px"
            }}
            >
                <Box>
                    <h1 style={{ textAlign: "center" }}>Политика конфиденциальности</h1>
                    <hr style={{ height: "3px", background: "#1976d2" }} />
                    <p>
                        Ваша конфиденциальность очень важна для нас.<br/>
                        Соответственно, мы разработали эту политику для того чтобы вы могли понять<br/>
                        как мы собираем, используем, сообщаем, раскрываем и используем личную<br/>
                        информацию. Ниже обзор нашей политики конфиденциальности.
                    </p>
                   <p>
                       1. До или во время сбора личной информации мы определяем цели,
                       для которых собирается информация.
                   </p>
                    <p>
                        2. Мы будем собирать и использовать личную информацию исключительно
                        для достижения указанных нами целей, в случае если мы получим согласие
                        заинтересованного лица или в соответствии с требованиями закона.
                    </p>
                    <p>
                        3. Мы будем хранить личную информацию только до тех пор, пока это
                        необходимо для достижения этих целей.
                    </p>
                    <p>
                        4. Мы будем собирать личную информацию законными и справедливыми
                        способами, при необходимости с ведома или согласия заинтересованного лица.
                    </p>
                    <p>
                        5. Персональные данные должны соответствовать целям для которых они будут
                        использоваться, быть точными, полными и актуальными.
                    </p>
                    <p>
                        6. Мы будем защищать личную информацию разумными мерами безопасности
                        от потери или кражи, а также от несанкционированного доступа, раскрытия,
                        копирования, использования или изменения.
                    </p>
                    <p>
                        7. Мы будем предоставлять клиентам информацию о наших политиках
                        и методах управления личной информацией.
                    </p>
                    <p>
                        8. Мы стремимся вести свой бизнес в соответствии с этими принципами, чтобы
                        гарантировать защиту и сохранение конфиденциальности личной информации.
                    </p>
                </Box>
                <Box style={{ marginTop: 50 }}>Последнее изменения 09.09.202.3</Box>
            </Box>
        </>
    );
};

export default Privacy;
