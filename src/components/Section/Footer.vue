<template>
    <div class="footer">
        <div class="logo-footer-container">
            <div class="logo-footer"></div>
        </div>
        <div class="media-footer-container">
            <div class="media-footer">
                <a href="#" class="media-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="#" class="media-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" class="media-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
                <a href="tel:438-390-5580" class="media-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" /></svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        width: 100%;
        height: 20rem;
        background-color: black;
        display: flex;
        flex-direction: column;
        margin-top:2rem;
    }

    .logo-footer-container {
        width: 100%;
        height: 8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .logo-footer {
        height: 100%;
        width: 20rem;
    }

    .media-footer-container {
        width: 100%;
        height: 4rem;
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .media-footer {
        height: 100%;
        width: 30rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .media-item {
        width: 5rem;
        height: 100%;
        background-color: #43484b;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
