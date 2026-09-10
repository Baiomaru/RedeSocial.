document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.querySelector(".bookmark-btn");
    const likesCountSpan = document.querySelector(".likes-count");
    const othersCountStrong = document.querySelector(".others-count");

    if (!likeBtn) return;

    let isLiked = false;
    let baseLikes = 3200;   // Inicia em 3200 (equivalente a 3.2k)
    let othersLikes = 357;  // Inicia em 357 others

    // Formata números grandes (ex: 3200 -> 3.2k)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "k";
        }
        return num.toString();
    }

    // Atualiza a interface
    function updateLikesDisplay() {
        if (likesCountSpan) {
            likesCountSpan.textContent = formatLikes(baseLikes);
        }
        if (othersCountStrong) {
            othersCountStrong.textContent = `${othersLikes} others`;
        }
    }

    // Função para Curtir (+1)
    function addLike() {
        if (isLiked) return;

        isLiked = true;
        baseLikes++;
        othersLikes++;
        likeBtn.classList.add("liked");
        updateLikesDisplay();
        animateSvg(likeBtn);
    }

    // Função para Descurtir (-1)
    function removeLike() {
        if (!isLiked) return;

        isLiked = false;
        baseLikes = Math.max(0, baseLikes - 1);
        othersLikes = Math.max(0, othersLikes - 1);
        likeBtn.classList.remove("liked");
        updateLikesDisplay();
        animateSvg(likeBtn);
    }

    // Animação Bounce no Ícone
    function animateSvg(button) {
        const svg = button.querySelector("svg");
        if (svg) {
            svg.style.transform = "scale(1.35)";
            setTimeout(() => {
                svg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // Evento de clique no BOTÃO DE CORAÇÃO (Curte / Descurte)
    likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isLiked) {
            removeLike();
        } else {
            addLike();
        }
    });

    // Evento de clique na IMAGEM PRINCIPAL (Sempre curte)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Evento de clique no BOTÃO DE SALVAR (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
            animateSvg(bookmarkBtn);
        });
    }
});