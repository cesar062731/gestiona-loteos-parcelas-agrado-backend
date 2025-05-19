#!/bin/bash

# Configura tu repositorio
REPO="cesar062731/gestiona-loteos-parcelas-agrado-backend"

echo "ADVERTENCIA: Este script intentará BORRAR etiquetas existentes en el repositorio $REPO."
echo "Luego creará un nuevo conjunto de etiquetas."
read -p "¿Estás ABSOLUTAMENTE SEGURO de que quieres continuar? (s/N): " CONFIRM_DELETE

if [[ "$CONFIRM_DELETE" != "s" && "$CONFIRM_DELETE" != "S" ]]; then
    echo "Operación cancelada por el usuario."
    exit 0
fi

echo ""
echo "--- Paso 1: Listando y Borrando Etiquetas Existentes (con confirmación individual) ---"

EXISTING_LABELS=$(gh label list --repo "$REPO" --json name --jq '.[].name')

if [ -z "$EXISTING_LABELS" ]; then
    echo "No se encontraron etiquetas existentes para borrar."
else
    echo "Se encontraron las siguientes etiquetas existentes:"
    # Usamos un bucle while read para manejar correctamente nombres con espacios
    while IFS= read -r LABEL_NAME; do
        if [ -z "$LABEL_NAME" ]; then # Saltar líneas vacías si las hubiera
            continue
        fi
        read -p "  ¿Borrar etiqueta '$LABEL_NAME'? (s/N): " CONFIRM_INDIVIDUAL_DELETE
        if [[ "$CONFIRM_INDIVIDUAL_DELETE" == "s" || "$CONFIRM_INDIVIDUAL_DELETE" == "S" ]]; then
            gh label delete "$LABEL_NAME" --repo "$REPO" --yes &&
                echo "    Etiqueta '$LABEL_NAME' borrada." ||
                echo "    Error al borrar etiqueta '$LABEL_NAME'."
        else
            echo "    Etiqueta '$LABEL_NAME' no borrada."
        fi
    done <<<"$EXISTING_LABELS" # Alimentamos el bucle con la salida de EXISTING_LABELS
fi

echo ""
echo "--- Paso 2: Creando/Actualizando Nuevo Conjunto de Etiquetas en MAYÚSCULAS ---"

# Definimos las etiquetas como arrays separados para nombre, color y descripción
# Esto es más compatible con shells más básicos que los arrays asociativos directos.
# Asegúrate de que el número de elementos en cada array coincida.

LABEL_NAMES=(
    "PRIORIDAD: ALTA"
    "PRIORIDAD: MEDIA"
    "PRIORIDAD: BAJA"
    "TIPO: ÉPICA"
    "TIPO: HISTORIA DE USUARIO"
    "TIPO: TAREA TÉCNICA"
    "TIPO: BUG"
    "TIPO: DOCUMENTACIÓN"
    "TIPO: CONFIGURACIÓN"
    "TIPO: MEJORA"
    "TIPO: INVESTIGACIÓN"
    "TIPO: TESTING"
    "MÓDULO: COMMON"
    "MÓDULO: DATABASE"
    "MÓDULO: ARQUITECTURA"
    "MÓDULO: SEGURIDAD"
    "MÓDULO: CI/CD"
    "MÓDULO: GESTIÓN DE PROYECTO"
    "MÓDULO: AUTH"
    "MÓDULO: USUARIOS"
    "MÓDULO: LOTEOS"
    "MÓDULO: MEMBRESIASLOTEO"
    "MÓDULO: ARCHIVOS"
    "MÓDULO: PARCELAS"
    "MÓDULO: PUBLICACIONESINFORMATIVAS"
    "MÓDULO: DOCUMENTOSLOTEO"
    "MÓDULO: COMITES"
    "MÓDULO: ENCUESTAS"
    "MÓDULO: FERIAPULGAS"
    "MÓDULO: MASCOTAS"
    "MÓDULO: NOTIFICACIONES"
    "MÓDULO: ONBOARDING"
    "MÓDULO: PAGOSUSCRIPCIONES"
    "MÓDULO: RESERVAS"
    "MÓDULO: CONTROLACCESO"
    "MÓDULO: FINANZAS"
    "MÓDULO: FOROS"
    "MÓDULO: INTEGRATIONS"
    "MÓDULO: TASKS"
    "MÓDULO: BACKOFFICE"
    "MÓDULO: INTELIGENCIACOMUNITARIA"
    "MÓDULO: INTEROPERABILIDAD"
    "MÓDULO: MONITOREO"
    "MÓDULO: DESPLIEGUE"
    "MÓDULO: FRONTEND"
)

LABEL_COLORS=(
    "b60205" # PRIORIDAD: ALTA
    "fbca04" # PRIORIDAD: MEDIA
    "0e8a16" # PRIORIDAD: BAJA
    "0052cc" # TIPO: ÉPICA
    "c5def5" # TIPO: HISTORIA DE USUARIO
    "7057ff" # TIPO: TAREA TÉCNICA
    "d73a4a" # TIPO: BUG
    "0e8a16" # TIPO: DOCUMENTACIÓN (Verde)
    "bfdadc" # TIPO: CONFIGURACIÓN
    "a2eeef" # TIPO: MEJORA
    "444444" # TIPO: INVESTIGACIÓN
    "BFFF00" # TIPO: TESTING
    "5319e7" # MÓDULO: COMMON
    "006b75" # MÓDULO: DATABASE
    "c5def5" # MÓDULO: ARQUITECTURA
    "d4c5f9" # MÓDULO: SEGURIDAD
    "fef2c0" # MÓDULO: CI/CD
    "eeeeee" # MÓDULO: GESTIÓN DE PROYECTO
    "f9d0c4" # MÓDULO: AUTH
    "ffccd4" # MÓDULO: USUARIOS
    "d4e157" # MÓDULO: LOTEOS
    "b39ddb" # MÓDULO: MEMBRESIASLOTEO
    "80cbc4" # MÓDULO: ARCHIVOS
    "ffcc80" # MÓDULO: PARCELAS
    "90caf9" # MÓDULO: PUBLICACIONESINFORMATIVAS
    "c8e6c9" # MÓDULO: DOCUMENTOSLOTEO
    "ffecb3" # MÓDULO: COMITES
    "b2dfdb" # MÓDULO: ENCUESTAS
    "ffab91" # MÓDULO: FERIAPULGAS
    "d1c4e9" # MÓDULO: MASCOTAS
    "81d4fa" # MÓDULO: NOTIFICACIONES
    "a5d6a7" # MÓDULO: ONBOARDING
    "ffccdd" # MÓDULO: PAGOSUSCRIPCIONES
    "bcaaa4" # MÓDULO: RESERVAS
    "ff8a65" # MÓDULO: CONTROLACCESO
    "ef9a9a" # MÓDULO: FINANZAS
    "9fa8da" # MÓDULO: FOROS
    "e0e0e0" # MÓDULO: INTEGRATIONS
    "cfd8dc" # MÓDULO: TASKS
    "b0bec5" # MÓDULO: BACKOFFICE
    "a1887f" # MÓDULO: INTELIGENCIACOMUNITARIA
    "8c9eff" # MÓDULO: INTEROPERABILIDAD
    "ffd54f" # MÓDULO: MONITOREO
    "ffc107" # MÓDULO: DESPLIEGUE
    "f06292" # MÓDULO: FRONTEND
)

LABEL_DESCRIPTIONS=(
    "Tareas críticas que deben abordarse con urgencia."                    # PRIORIDAD: ALTA
    "Tareas importantes, parte del flujo normal."                          # PRIORIDAD: MEDIA
    "Tareas deseables o mejoras menores que pueden esperar."               # PRIORIDAD: BAJA
    "Gran funcionalidad o conjunto de historias de usuario."               # TIPO: ÉPICA
    "Funcionalidad desde la perspectiva del usuario."                      # TIPO: HISTORIA DE USUARIO
    "Tarea específica de desarrollo o implementación técnica."             # TIPO: TAREA TÉCNICA
    "Reporte y seguimiento de errores."                                    # TIPO: BUG
    "Creación o actualización de documentación."                           # TIPO: DOCUMENTACIÓN
    "Configuración del proyecto, entorno, herramientas."                   # TIPO: CONFIGURACIÓN
    "Mejoras a funcionalidades existentes, optimizaciones."                # TIPO: MEJORA
    "Explorar nueva tecnología o viabilidad de solución."                  # TIPO: INVESTIGACIÓN
    "Tareas específicas de creación o ejecución de pruebas."               # TIPO: TESTING
    "Componentes y utilidades transversales"                               # MÓDULO: COMMON
    "Tareas de DDL, migraciones, config. TypeORM"                          # MÓDULO: DATABASE
    "Decisiones y tareas de diseño arquitectónico global"                  # MÓDULO: ARQUITECTURA
    "Tareas específicas de seguridad"                                      # MÓDULO: SEGURIDAD
    "Configuración y mantenimiento de CI/CD"                               # MÓDULO: CI/CD
    "Tareas de planificación y seguimiento"                                # MÓDULO: GESTIÓN DE PROYECTO
    "Autenticación y autorización"                                         # MÓDULO: AUTH
    "Gestión de usuarios y habitantes"                                     # MÓDULO: USUARIOS
    "Gestión de loteos y calles"                                           # MÓDULO: LOTEOS
    "Vínculo usuario-loteo-rol"                                            # MÓDULO: MEMBRESIASLOTEO
    "Gestión de subida y almacenamiento de archivos"                       # MÓDULO: ARCHIVOS
    "Gestión de parcelas"                                                  # MÓDULO: PARCELAS
    "Noticias, anuncios"                                                   # MÓDULO: PUBLICACIONESINFORMATIVAS
    "Reglamentos y documentos oficiales"                                   # MÓDULO: DOCUMENTOSLOTEO
    "Gestión de comités y sus miembros"                                    # MÓDULO: COMITES
    "Funcionalidad de encuestas"                                           # MÓDULO: ENCUESTAS
    "Mercado comunitario intra-loteo"                                      # MÓDULO: FERIAPULGAS
    "Gestión de mascotas"                                                  # MÓDULO: MASCOTAS
    "Envío de emails y futuras notificaciones push, colas"                 # MÓDULO: NOTIFICACIONES
    "Flujo de alta y configuración inicial de loteos, Sagas"               # MÓDULO: ONBOARDING
    "Gestión de planes, suscripciones, y pasarela de pagos"                # MÓDULO: PAGOSUSCRIPCIONES
    "Gestión de espacios comunes y sus reservas"                           # MÓDULO: RESERVAS
    "QR, cámaras, portería, bitácoras (avanzado)"                          # MÓDULO: CONTROLACCESO
    "Cobros, pagos, rendiciones (avanzado)"                                # MÓDULO: FINANZAS
    "Foros comunitarios (avanzado)"                                        # MÓDULO: FOROS
    "Wrappers para APIs de Terceros (Pago, Identidad, QR, Cámaras, Clima)" # MÓDULO: INTEGRATIONS
    "Cron Jobs y tareas programadas"                                       # MÓDULO: TASKS
    "Interfaz SuperAdmin/Operador de Plataforma"                           # MÓDULO: BACKOFFICE
    "Futuras funcionalidades de IA"                                        # MÓDULO: INTELIGENCIACOMUNITARIA
    "Compartir información entre loteos"                                   # MÓDULO: INTEROPERABILIDAD
    "Prometheus, Grafana, Loki"                                            # MÓDULO: MONITOREO
    "Dockerización y despliegue en la nube"                                # MÓDULO: DESPLIEGUE
    "Tareas relacionadas con el Frontend Angular"                          # MÓDULO: FRONTEND
)

# Iterar usando índices numéricos
for i in "${!LABEL_NAMES[@]}"; do
    LABEL_FULL_NAME="${LABEL_NAMES[i]}"
    COLOR="${LABEL_COLORS[i]}"
    DESCRIPTION="${LABEL_DESCRIPTIONS[i]}"

    echo "Procesando etiqueta: '$LABEL_FULL_NAME' con color '$COLOR' y descripción '$DESCRIPTION'"

    gh label create "$LABEL_FULL_NAME" --repo "$REPO" --color "$COLOR" --description "$DESCRIPTION" --force &&
        echo "  Etiqueta '$LABEL_FULL_NAME' creada/actualizada exitosamente." ||
        echo "  Error al crear/actualizar etiqueta '$LABEL_FULL_NAME'."
done

echo ""
echo "Proceso de gestión de etiquetas finalizado."
