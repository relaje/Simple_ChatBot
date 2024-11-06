const messagesDiv = document.getElementById('messages');
    const userInput = document.getElementById('userInput');

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const userMessage = userInput.value;
            if (userMessage) {
                addMessage(userMessage, 'user');
                getBotResponse(userMessage);
                userInput.value = '';
            }
        }
    });

    function addMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
    }

    function getBotResponse(input) {
        // Contoh respons sederhana
        let response = "Maaf, saya belum bisa menjawab pertanyaan itu.";
        
        if (input.toLowerCase().includes("hukum pidana")) {
            response = "Hukum pidana adalah cabang hukum yang mengatur tentang perbuatan-perbuatan yang dianggap sebagai tindak pidana (kejahatan atau pelanggaran) serta memberikan sanksi atau hukuman kepada pelaku yang melakukan tindak pidana tersebut. Tujuan utama hukum pidana adalah untuk menjaga ketertiban dan keamanan masyarakat dengan memberikan ancaman hukuman kepada mereka yang melanggar aturan hukum.";
        } else if (input.toLowerCase().includes("unsur")) {
            response = "Unsur-unsur Hukum Pidana yaitu: Perbuatan, Melawan hukum, Kesalahan, Dipertanggungjawabkan, Tindakan yang dilarang atau diharuskan oleh undang-undang dan Waktu, tempat, dan keadaan. Unsur-unsur tindak pidana lainnya adalah: Perbuatan yang dilakukan oleh manusia, Perbuatan yang diancam dengan pidana, Perbuatan yang bertentangan dengan undang-undang, Pelaku harus memiliki kemampuan bertanggung jawab atas perbuatannya, Pelaku harus disertai kesalahan atau kesengajaan dalam melakukan perbuatan tersebut.";
        } else if (input.toLowerCase().includes("asas")) {
            response = "Asas-asas Hukum Pidana dalam KHUP: Asas Legalitas, Asas Wilayah atau Teritorial, Asas Perlindungan atau Asas Nasional, Asas Universal atau Asas Persamaan, Asas Nasional Aktif.."
        }

        addMessage(response, 'bot');
    }