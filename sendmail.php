<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['order'])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $order = $_POST["order"];

        $to = "evelynscleto@gmail.com"; 
        $subject = "Novo Pedido de Contato do Heavans Garden";
        $body = "Nome: $name\nE-mail: $email\nTelefone: $phone\nPedido: $order";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            // Redireciona para a página de agradecimento ou para a página inicial
            header("Location: index.html"); 
            exit; // Garante que o script pare de executar após o redirecionamento
        } else {
            echo "Falha ao enviar mensagem.";
        }
    }
}
?>
