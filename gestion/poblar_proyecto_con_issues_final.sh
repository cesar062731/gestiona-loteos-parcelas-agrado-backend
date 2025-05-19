#!/bin/bash

# ------------------------------------------------------------------------------------
# SCRIPT DE CREACIÓN/ACTUALIZACIÓN DE ISSUES ÉPICA Y ASIGNACIÓN A PROYECTO
# Repositorio: cesar062731/gestiona-loteos-parcelas-agrado-backend
# Proyecto Objetivo: 'GestionaTuLoteoAgrado-PlataformaIntegral' (ID Global: PVT_kwHOAouh884A5STL, Número: 9)
# ------------------------------------------------------------------------------------
# Este script:
# 1. Creará Issues ÉPICA de alto nivel para cada Fase (Hito) si aún no existen.
# 2. Intentará añadir TODOS los issues del repositorio al Proyecto.
#
# PRE-REQUISITOS:
# - CLI 'gh' instalada y autenticada CON SCOPES 'repo' y 'project'.
# - El PROYECTO 'GestionaTuLoteoAgrado-PlataformaIntegral' (N.º 9) DEBE EXISTIR.
# - Los 8 HITOS (Milestones) y 45 LABELS (Etiquetas) YA DEBEN EXISTIR con los nombres exactos.
# ¿Estás listo para proceder? (s/N):
read -p "¿Estás listo para proceder? (s/N): " respuesta
if [[ "$respuesta" != "s" && "$respuesta" != "S" ]]; then
    echo "Saliendo del script."
    exit 1
fi

echo
echo "--- Creando/Asegurando Issues ÉPICA para las Fases ---"

fases=(
    "FASE 0: Cimientos Técnicos y Puesta a Punto Profesional"
    "FASE 1 (Backend): Cimientos - Sincronización Total y Migración Base"
    "FASE 2 (Backend): Desarrollo Núcleo - Onboarding y Gestión Base Loteo"
    "FASE 3 (Backend): Funcionalidades Adicionales para Release 1 Comercial"
    "FASE 4 (Backend): Preparación Comercialización y Despliegue Inicial"
    "FASE 5 (Frontend): Desarrollo Frontend MVP para Release 1 Comercial"
    "FASE 6 (Operaciones): Marcha Blanca y Lanzamiento Release 1 Comercial"
    "FASE 7+: Evolución Post-Lanzamiento"
)

for fase in "${fases[@]}"; do
    epic_title="ÉPICA: $fase"
    milestone_name="$fase"

    echo "Procesando ÉPICA: '$epic_title' para Hito '$milestone_name'"

    # Buscar si la ÉPICA ya existe
    existing_issue=$(gh issue list --repo="cesar062731/gestiona-loteos-parcelas-agrado-backend" --search="$epic_title" --limit 1 --json number,url)

    if [[ -n "$existing_issue" ]]; then
        issue_data=$(echo "$existing_issue" | jq -r '.[0]')
        issue_number=$(echo "$issue_data" | jq -r '.number')
        issue_url=$(echo "$issue_data" | jq -r '.url')
        echo "  Issue ÉPICA '$epic_title' ya existe (#$issue_number). URL: $issue_url"
    else
        # Crear la ÉPICA si no existe
        new_issue=$(gh issue create --repo="cesar062731/gestiona-loteos-parcelas-agrado-backend" --title="$epic_title" --milestone="$milestone_name" --label="ÉPICA" --json number,url)
        issue_data=$(echo "$new_issue" | jq -r '.')
        issue_number=$(echo "$issue_data" | jq -r '.number')
        issue_url=$(echo "$issue_data" | jq -r '.url')
        echo "  Issue ÉPICA '$epic_title' creado como #$issue_number. URL: $issue_url"
    fi

    if [[ -n "$issue_url" ]]; then
        echo "  Intentando añadir '$epic_title' (URL: $issue_url) al proyecto (IDG: PVT_kwHOAouh884A5STL)..."
        if gh project item-add 9 --owner="cesar062731" --url "$issue_url"; then
            echo "    Éxito al añadir '$epic_title' al proyecto."
        else
            echo "    Advertencia: No se pudo añadir issue '$epic_title' al proyecto 'GestionaTuLoteoAgrado-PlataformaIntegral'."
        fi
    else
        echo "  Error: No se pudo obtener la URL del issue ÉPICA '$epic_title'."
    fi
    echo
done

echo
echo "--- PASO 3: Asegurando que TODOS los Issues del Repositorio estén en el Proyecto ---"
echo "Obteniendo todos los issues del repositorio (hasta 100)..."

all_issues_json=$(gh issue list --repo="cesar062731/gestiona-loteos-parcelas-agrado-backend" --limit 100 --json url)

echo "Salida sin procesar de 'gh issue list':"
echo "$all_issues_json"
echo

echo "$all_issues_json" | jq -r '.[]?.url' | grep -v '^$' | while IFS= read -r issue_url; do
    issue_number=$(echo "$issue_url" | sed -n 's#.*/\([0-9]\+\)$#\1#p')
    issue_title=$(gh issue view "$issue_number" --repo="cesar062731/gestiona-loteos-parcelas-agrado-backend" --json title -q .title)

    echo "  Intentando añadir issue #$issue_number ('$issue_title') con URL: $issue_url al proyecto (IDG: PVT_kwHOAouh884A5STL)..."
    if gh project item-add 9 --owner="cesar062731" --url "$issue_url"; then
        echo "    Éxito al añadir issue #$issue_number ('$issue_title') al proyecto."
    else
        echo "    Advertencia: No se pudo añadir issue #$issue_number ('$issue_title') al proyecto 'GestionaTuLoteoAgrado-PlataformaIntegral'."
    fi
done

echo
echo "Intento de asignación de todos los issues existentes al proyecto finalizado."
echo
echo "------------------------------------------------------------------------------------"
echo "PROCESO FINALIZADO."
echo "1. VERIFICA tu Proyecto de GitHub 'GestionaTuLoteoAgrado-PlataformaIntegral' y sus Vistas."
echo "2. Revisa los Hitos e Issues en GitHub y asegúrate de que estén asignados correctamente y aparezcan en tus vistas del proyecto."
echo "------------------------------------------------------------------------------------"

exit 0
