<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST['nombre']);
  $email = htmlspecialchars($_POST['email']);
  $mensaje = htmlspecialchars($_POST['mensaje']);

  $destino = "tu_correo@example.com";
  $asunto = "Nuevo mensaje de contacto";

  $contenido = "Nombre: $nombre\n";
  $contenido .= "Email: $email\n";
  $contenido .= "Mensaje:\n$mensaje";

  $headers = "From: $email";

  if (mail($destino, $asunto, $contenido, $headers)) {
    header("Location: gracias.html");
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>