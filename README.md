# Examen Unidad III

## Estructura aplicación
- Home
- Servicios
- Proyectos
- Clientes
- Blog
- Contacto

## Notificaciones
- Se implementó un sistema de notificaciones usando la librería 'sonner'.
- Todas las páginas (excepto Clientes) muestran un mensaje toast al ser visitadas, indicando la sección actual.

## Clientes
- CRUD completo para la gestión de clientes.
 
## Componentes
- `Navbar`
- `Table CLientes`
- `Formulario Clientes`
- `Formulario Actualizar Clientes`

## Validaciones
- Se utilizó Zod para la validación de datos en los formularios de clientes.
- Implementación de mensajes de error personalizados para una mejor experiencia de usuario.

## Estilización
- Se implementó un diseño responsivo utilizando Tailwind CSS.
- Uso de componentes de shadcn/ui para mantener una apariencia consistente y profesional.
- Incorporación de iconos de Lucide para mejorar la estética y usabilidad.

## Tecnologías Utilizadas
- Next.js
- React
- TypeScript
- Prisma (para la gestión de la base de datos)
- Tailwind CSS
- shadcn/ui (para componentes de UI)
- Sonner (para notificaciones toast)
- Zod (para validaciones de esquemas)
- Lucide (para iconos)

## Implementación

1. Página de inicio con el Navbar actualizado
![image](https://github.com/user-attachments/assets/d1e42178-3e53-4f5f-bbea-cf2aa0a3a5e7)
![image](https://github.com/user-attachments/assets/ba0438f8-e38c-42f1-bc6f-2eca3223aebf)

- Notificación toast indicando la página actual
![image](https://github.com/user-attachments/assets/b45057c8-42ff-41cc-afc1-edc1089fa671)

- Lista de clientes inicial
![image](https://github.com/user-attachments/assets/76fbefb6-e8c7-4041-a048-5bacdaf95446)

- Formulario de creación de cliente con validación
![image](https://github.com/user-attachments/assets/3d43f883-c6a4-4b35-b1df-1713baf76d98)

- Lista de clientes con opciones de edición y eliminación
![image](https://github.com/user-attachments/assets/f26946f1-b798-4e19-8c6f-7de84b8a5d13)

- Formulario de edición de cliente
![image](https://github.com/user-attachments/assets/59a25871-3cb5-4e4a-8834-fd263cbb2611)

- Cliente editado correctamente
![image](https://github.com/user-attachments/assets/11d2f5af-3355-48e9-ba6a-a27bc482a4d6)

- Eliminación de cliente
![image](https://github.com/user-attachments/assets/d440ef69-3fe1-45be-870d-719b17770405)

## Consideraciones Adicionales
- La aplicación sigue las mejores prácticas de React y Next.js, utilizando componentes del lado del servidor y del cliente según sea necesario.
- Se implementó un manejo de errores básico en los formularios y acciones del servidor.
- El diseño es consistente en todas las páginas, proporcionando una experiencia de usuario fluida y profesional.

