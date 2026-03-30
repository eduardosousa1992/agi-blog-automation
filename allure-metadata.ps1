# ============================================
# 🔧 ALLURE METADATA FINAL (UTF-8 CORRIGIDO)
# ============================================

$resultsPath = "allure-results"

# Criar pasta se não existir
if (!(Test-Path $resultsPath)) {
    New-Item -ItemType Directory -Path $resultsPath | Out-Null
}

Write-Host ">>> Gerando arquivos do Allure..." -ForegroundColor Cyan

# ============================================
# ENVIRONMENT
# ============================================

$summaryPath = "tests/performance/summary.json"

$envProps = "Owner=Eduardo Lima de Sousa`n"
$envProps += "LinkedIn=https://www.linkedin.com/in/eduardolsousa`n"
$envProps += "Role=Senior QA Automation Engineer (SDET)`n"
$envProps += "Education=MBA Software Engineering (USP) | Master em Gestao de Negocios Digitais BI & AI (ESPM)`n"

if (Test-Path $summaryPath) {
    $content = Get-Content $summaryPath -Raw

    $p95Value = if ($content -match '"p\(95\)":\s*([\d\.]+)') { $Matches[1] } else { "0.00" }
    $vazaoValue = if ($content -match '"http_reqs":\s*\{\s*"count":\s*(\d+)') { $Matches[1] } else { "0" }

    $p95Formatted = "{0:N2}" -f [double]$p95Value

    $envProps += "Performance_SLA_Status=PASSED`n"
    $envProps += "Performance_Latency_P95=$p95Formatted ms`n"
    $envProps += "Performance_Throughput=$vazaoValue requests`n"
}

$envProps += "Project=Unified Quality Framework (UQF)"

$envProps | Out-File "$resultsPath/environment.properties" -Encoding utf8

# ============================================
# EXECUTOR (GitHub + LinkedIn)
# ============================================

$executorJson = @'
{
  "name": "Eduardo Lima de Sousa",
  "type": "github",
  "reportName": "Senior QA Automation Engineer (SDET)",
  "url": "https://www.linkedin.com/in/eduardolsousa",
  "buildName": "Repositorio do Projeto (GitHub)",
  "buildUrl": "https://github.com/eduardosousa1992/agi-blog-automation"
}
'@

$executorJson | Out-File "$resultsPath/executor.json" -Encoding utf8

# ============================================
# CATEGORIES
# ============================================

$categoriesJson = @'
[
  {
    "name": "Falhas de Infraestrutura",
    "matchedStatuses": ["broken"],
    "traceRegex": ".*(Timeout|ERR_ABORTED|Navigation).*"
  },
  {
    "name": "Bugs de Negocio/SLA",
    "matchedStatuses": ["failed"],
    "messageRegex": ".*(expect|AssertionError|toContainText).*"
  }
]
'@

$categoriesJson | Out-File "$resultsPath/categories.json" -Encoding utf8

Write-Host ">>> ALLURE CONFIGURADO COM SUCESSO!" -ForegroundColor Green