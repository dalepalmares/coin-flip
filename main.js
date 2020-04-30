const ready = () => {
    const coin = document.querySelector("#coin");

    coin.addEventListener("click", () => {
        const result = Math.random();

        coin.classList.remove("heads", "tails");

        setTimeout(() => {
            if (result <= 0.5) {
                coin.classList.add("heads");
                console.log("It's Heads");
            } else {
                coin.classList.add("tails");
                console.log("It's Tails");
            }
        }, 100);
    });
};

ready();
