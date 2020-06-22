<?php

/* database/tracking/untracked_tables.twig */
class __TwigTemplate_3addb8e6b120850c4e1e29c9c09c540d05e17989c4968f5599df8e4351f687fa extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<h3>";
        echo _gettext("Untracked tables");
        echo "</h3>
<form method=\"post\" action=\"db_tracking.php\" name=\"untrackedForm\"
    id=\"untrackedForm\" class=\"ajax\">
    ";
        // line 4
        echo PhpMyAdmin\Url::getHiddenInputs((isset($context["db"]) ? $context["db"] : null));
        echo "
    <table id=\"noversions\" class=\"data\">
        <thead>
            <tr>
                <th></th>
                <th>";
        // line 9
        echo _gettext("Table");
        echo "</th>
                <th>";
        // line 10
        echo _gettext("Action");
        echo "</th>
            </tr>
        </thead>
        <tbody>
            ";
        // line 14
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["untracked_tables"]) ? $context["untracked_tables"] : null));
        foreach ($context['_seq'] as $context["_key"] => $context["table_name"]) {
            if ((PhpMyAdmin\Tracker::getVersion((isset($context["db"]) ? $context["db"] : null), $context["table_name"]) ==  -1)) {
                // line 15
                echo "                <tr>
                    <td class=\"center\">
                        <input type=\"checkbox\" name=\"selected_tbl[]\"
                            class=\"checkall\" id=\"selected_tbl_";
                // line 18
                echo twig_escape_filter($this->env, $context["table_name"], "html", null, true);
                echo "\"
                            value=\"";
                // line 19
                echo twig_escape_filter($this->env, $context["table_name"], "html", null, true);
                echo "\"/>
                    </td>
                    <th>
                        <label for=\"selected_tbl_";
                // line 22
                echo twig_escape_filter($this->env, $context["table_name"], "html", null, true);
                echo "\">
                            ";
                // line 23
                echo twig_escape_filter($this->env, $context["table_name"], "html", null, true);
                echo "
                        </label>
                    </th>
                    <td>
                        <a href=\"tbl_tracking.php";
                // line 27
                echo (isset($context["url_query"]) ? $context["url_query"] : null);
                echo "&amp;table=";
                echo twig_escape_filter($this->env, $context["table_name"], "html", null, true);
                echo "\">
                            ";
                // line 28
                echo PhpMyAdmin\Util::getIcon("eye", _gettext("Track table"));
                echo "
                        </a>
                    </td>
                </tr>
            ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['table_name'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 33
        echo "        </tbody>
    </table>
    ";
        // line 35
        $this->loadTemplate("select_all.twig", "database/tracking/untracked_tables.twig", 35)->display(["pma_theme_image" =>         // line 36
(isset($context["pma_theme_image"]) ? $context["pma_theme_image"] : null), "text_dir" =>         // line 37
(isset($context["text_dir"]) ? $context["text_dir"] : null), "form_name" => "untrackedForm"]);
        // line 40
        echo "    ";
        echo PhpMyAdmin\Util::getButtonOrImage("submit_mult", "mult_submit", _gettext("Track table"), "eye", "track");
        // line 46
        echo "
</form>
";
    }

    public function getTemplateName()
    {
        return "database/tracking/untracked_tables.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 46,  102 => 40,  100 => 37,  99 => 36,  98 => 35,  94 => 33,  82 => 28,  76 => 27,  69 => 23,  65 => 22,  59 => 19,  55 => 18,  50 => 15,  45 => 14,  38 => 10,  34 => 9,  26 => 4,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "database/tracking/untracked_tables.twig", "E:\\phpstudy_pro\\WWW\\biyesheji\\phpMyAdmin4.8.5\\templates\\database\\tracking\\untracked_tables.twig");
    }
}
