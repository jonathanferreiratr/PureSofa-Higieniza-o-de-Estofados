 document.addEventListener('DOMContentLoaded', function() {
            const budgetForm = document.getElementById('budget-form');
            const resultDiv = document.getElementById('result');
            const whatsappLink = document.getElementById('whatsapp-link');
            
            // Substitua pelo seu nome de usuário do Instagram
            const instagramLinks = document.querySelectorAll('a[href*="https://www.instagram.com/puresofabsb/"]');
            instagramLinks.forEach(link => {
                link.href = link.href.replace('seuinstagram', '@puresofabsb'); // Substitua "seuperfil" pelo seu @ do Instagram
            });
            
            budgetForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const clientName = document.getElementById('client-name').value;
                const clientPhone = document.getElementById('client-phone').value;
                const clientAddress = document.getElementById('client-address').value;
                const serviceType = document.getElementById('service-type').value;
                const itemSize = document.getElementById('item-size').value;
                const material = document.getElementById('material').value;
                const condition = document.getElementById('condition').value;
                const additionalInfo = document.getElementById('additional-info').value;
                
                if (!clientName || !clientPhone || !clientAddress || !serviceType || !itemSize || !material || !condition) {
                    alert('Por favor, preencha todos os campos obrigatórios.');
                    return;
                }
                
                // Gerar mensagem para WhatsApp
                const serviceTypeText = document.getElementById('service-type').options[document.getElementById('service-type').selectedIndex].text;
                const itemSizeText = document.getElementById('item-size').options[document.getElementById('item-size').selectedIndex].text;
                const materialText = document.getElementById('material').options[document.getElementById('material').selectedIndex].text;
                const conditionText = document.getElementById('condition').options[document.getElementById('condition').selectedIndex].text;
                
                const message = `Olá! Gostaria de solicitar um orçamento para higienização de estofados.\n\n*Dados do Cliente:*\nNome: ${clientName}\nTelefone: ${clientPhone}\nEndereço: ${clientAddress}\n\n*Detalhes do Serviço:*\nTipo: ${serviceTypeText}\nTamanho: ${itemSizeText}\nMaterial: ${materialText}\nCondição: ${conditionText}\n\nInformações Adicionais: ${additionalInfo || 'Nenhuma'}\n\nPor favor, informe o valor do serviço.`;
                const encodedMessage = encodeURIComponent(message);
                whatsappLink.href = `https://wa.me/5561991616986?text=${encodedMessage}`;
                
                // Exibir o resultado
                resultDiv.style.display = 'block';
                
                // Rolar suavemente até o resultado
                resultDiv.scrollIntoView({ behavior: 'smooth' });
            });
        });
