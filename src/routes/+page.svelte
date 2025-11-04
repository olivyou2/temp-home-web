<script>
    import { longTimeFormat, timeFormat } from "$lib/timetool";
    import emblaCarouselSvelte from "embla-carousel-svelte";

    export let data;
    const { temps } = data;
    const lastUpdate = temps[temps.length - 1]?.time || "";
    const lastTemp = temps[temps.length - 1]?.temperature || "정보 없음";
    const lastHum = temps[temps.length - 1]?.humidity || "정보 없음";
</script>

<main>
    <div id="title">
        NOW TEMP <span class="small">@HOME</span>
    </div>

    <div id="current">
        <div class="item" id="temp">{Math.floor(lastTemp * 10) / 10}℃</div>
        <div class="item" id="hum">{Math.floor(lastHum * 10) / 10}%</div>
    </div>

    <div id="last-update">최근 업데이트: {longTimeFormat(lastUpdate)}</div>

    <div id="graph">
        <div
            class="embla"
            use:emblaCarouselSvelte={{
                options: { dragFree: true },
                plugins: [],
            }}
        >
            <div class="embla__container">
                {#each temps as temp}
                    <div class="embla__slide">
                        <div class="column">
                            <div
                                class="temp"
                                style={`margin-top: ${(40 - temp.temperature) * 4}px;`}
                            >
                                {Math.floor(temp.temperature * 10) / 10}℃
                            </div>
                            <div class="dot"><span></span></div>
                            <div class="gap"></div>
                            <div class="label">{timeFormat(temp.time)}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div id="hum-graph">
        <div
            class="embla"
            use:emblaCarouselSvelte={{
                options: { dragFree: true },
                plugins: [],
            }}
        >
            <div class="embla__container">
                {#each temps as temp}
                    <div class="embla__slide">
                        <div class="column">
                            <div
                                class="temp"
                                style={`margin-top: ${(100 - temp.humidity) * 4}px;`}
                            >
                                {Math.floor(temp.humidity * 10) / 10}%
                            </div>
                            <div class="dot"><span></span></div>
                            <div class="gap"></div>
                            <div class="label">{timeFormat(temp.time)}</div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    #title {
        padding-left: 10px;

        font-size: 23px;
        font-weight: bold;
        color: white;
    }
    .small {
        font-size: 18px;
        font-weight: normal;
        color: white;
    }
    #current {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 30px;
        height: 101px;

        border-radius: 20px;
        background: rgba(199, 245, 255, 0.32);

        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        > .item {
            flex: 1;
            display: flex;
            justify-content: center;

            color: white;
            font-size: 23px;
            font-weight: bold;
        }
    }
    #last-update {
        padding-left: 10px;

        font-size: 14px;
        color: white;
    }
    #graph {
        height: 270px;
        padding: 30px 10px 15px 10px;
        box-sizing: border-box;

        border-radius: 20px;
        background: rgba(199, 245, 255, 0.32);

        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        .embla {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .embla__container {
            display: flex;
            height: 100%;
        }

        .embla__slide {
            flex: 0 0 60px;
            min-width: 0;
            position: relative;
        }

        .column {
            display: flex;
            height: 100%;
            width: 100%;

            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            row-gap: 2px;

            .temp {
                font-size: 12px;
                font-weight: normal;
                color: white;
            }

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 3px;
                background-color: white;
            }

            .gap {
                flex: 1;
            }

            .label {
                font-size: 14px;
                font-weight: normal;
                color: white;
                text-align: center;
            }
        }
    }
    #hum-graph {
        height: 270px;
        padding: 30px 10px 15px 10px;
        box-sizing: border-box;

        border-radius: 20px;
        background: rgba(199, 245, 255, 0.32);

        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);

        .embla {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .embla__container {
            display: flex;
            height: 100%;
        }

        .embla__slide {
            flex: 0 0 60px;
            min-width: 0;
            position: relative;
        }

        .column {
            display: flex;
            height: 100%;
            width: 100%;

            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            row-gap: 2px;

            .temp {
                font-size: 12px;
                font-weight: normal;
                color: white;
            }

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 3px;
                background-color: white;
            }

            .gap {
                flex: 1;
            }

            .label {
                font-size: 14px;
                font-weight: normal;
                color: white;
                text-align: center;
            }
        }
    }
</style>
